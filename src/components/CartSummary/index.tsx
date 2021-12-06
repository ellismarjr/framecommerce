import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useMemo} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

import {useCart} from '../../hooks/useCart';
import {formatPrice} from '../../utils/formatPriceBR';

import {
  Container,
  ShowItemsButtom,
  CheckoutButton,
  CheckoutButtonText,
  AmountItems,
  Amount,
} from './styles';

interface CartSummaryProps {
  isCheckout?: boolean;
}

export function CartSummary({isCheckout = false}: CartSummaryProps) {
  const navigation = useNavigation();
  const {cart} = useCart();

  const handleNavigateToCart = useCallback(() => {
    return navigation.navigate('Cart');
  }, [navigation]);

  const amountItems = useMemo(() => {
    const amount = cart?.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return formatPrice(amount);
  }, [cart]);

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
            buttonPositive: 'OK',
            buttonNegative: 'Cancelar',
          },
        );

        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        Alert.alert('Write permission err');
        return false;
      }
    } else {
      return true;
    }
  };

  const formattedCartToHTML = useMemo(() => {
    return cart?.map(item => {
      return `<tr>
        <td style="padding: 16px 0; font-size: 20px; color: #666; border-bottom: 1px solid #eeeeee;">${
          item.name
        }</td>
        <td style="padding: 16px 0; font-size: 20px; color: #666; border-bottom: 1px solid #eeeeee;">${
          item.priceFormatted
        }</td>
        <td style="padding: 16px 0; font-size: 20px; color: #666; border-bottom: 1px solid #eeeeee;">${
          item.quantity
        }</td>
        <td style="padding: 16px 0; font-size: 20px; color: #666; border-bottom: 1px solid #eeeeee;">${formatPrice(
          item.price * item.quantity,
        )}</td>
      </tr>`;
    });
  }, [cart]);

  const createPDF = useCallback(async () => {
    const isPermittedRequest = await isPermitted();
    if (isPermittedRequest) {
      const options = {
        html: `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        
        <body style="width: 100%; padding: 30px;">
        
          <table style="width: 100%;">
            <thead>
              <tr>
                <th style="margin-left: 90px;text-align: left; color: #444;font-size: 25px;line-height: 19px;">Produto</th>
                <th style="margin-left: 90px;text-align: left; color: #444;font-size: 25px;line-height: 19px;">Preço unitário</th>
                <th style="margin-left: 90px;text-align: left; color: #444;font-size: 25px;line-height: 19px;">Quantidade</th>
                <th style="margin-left: 90px;text-align: left; color: #444;font-size: 25px;line-height: 19px;">Subtotal</th>
              </tr>
            </thead>
            <tbody>
             ${formattedCartToHTML.map(cartToHTML => cartToHTML)}
            </tbody>
          </table>
        
          <footer style="margin-top: 30px; font-weight: bold;font-size: 25px">TOTAL: ${amountItems} </footer>
        
        </body>
        
        </html>
        `,
        fileName: 'checkout',
        directory: 'docs',
      };
      const file = await RNHTMLtoPDF.convert(options);
      return file;
    }
  }, [amountItems, formattedCartToHTML]);

  const handleCheckout = useCallback(async () => {
    const file = await createPDF();
    navigation.navigate('Checkout', {file});
  }, [createPDF, navigation]);

  return (
    <Container>
      <ShowItemsButtom activeOpacity={0.7} onPress={handleNavigateToCart}>
        <Feather name="shopping-cart" size={24} color="#fff" />
        <AmountItems>{cart?.length} itens</AmountItems>
      </ShowItemsButtom>

      {isCheckout && (
        <CheckoutButton activeOpacity={0.5} onPress={handleCheckout}>
          <CheckoutButtonText>Checkout</CheckoutButtonText>
        </CheckoutButton>
      )}

      <Amount>{amountItems}</Amount>
    </Container>
  );
}
