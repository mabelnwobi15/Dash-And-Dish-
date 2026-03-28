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

export default function ConfirmationScreen({ goToScreen }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmed 🎉</Text>
      <Text style={styles.subtitle}>Your meal is being prepared.</Text>

      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={() => goToScreen('Orders')}>
        <Text style={styles.secondaryButtonText}>View Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4FE',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#354F52',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#354F52',
    marginBottom: 28,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF5E3A',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 14,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#A3C9A8',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  secondaryButtonText: {
    color: '#354F52',
    fontWeight: 'bold',
  },
});