import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type ScreenName =
  | 'Splash'
  | 'Auth'
  | 'Home'
  | 'Menu'
  | 'DishDetail'
  | 'Cart'
  | 'Checkout'
  | 'Confirmation'
  | 'Orders'
  | 'Profile'
  | 'RestaurantInfo';

type Props = {
  goToScreen: (screen: ScreenName) => void;
};

export default function CartScreen({ goToScreen }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <Text style={styles.item}>Chicken Burger Combo - R65</Text>
      <Text style={styles.total}>Total: R65</Text>

      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Checkout')}>
        <Text style={styles.buttonText}>Proceed to Checkout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => goToScreen('Menu')}>
        <Text style={styles.secondaryButtonText}>Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4FE',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#354F52',
    marginBottom: 24,
  },
  item: {
    fontSize: 18,
    color: '#354F52',
    marginBottom: 12,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5E3A',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF5E3A',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 14,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#A3C9A8',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#354F52',
    fontWeight: 'bold',
  },
});