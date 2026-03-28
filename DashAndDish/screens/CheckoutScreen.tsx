import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

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

export default function CheckoutScreen({ goToScreen }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      <TextInput style={styles.input} placeholder="Enter pickup name" placeholderTextColor="#777" />
      <TextInput style={styles.input} placeholder="Enter student number" placeholderTextColor="#777" />

      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Confirmation')}>
        <Text style={styles.buttonText}>Confirm Order</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => goToScreen('Cart')}>
        <Text style={styles.secondaryButtonText}>Back to Cart</Text>
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
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#FF5E3A',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
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