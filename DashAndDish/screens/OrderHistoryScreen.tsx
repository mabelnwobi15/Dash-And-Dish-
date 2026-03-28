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

export default function OrderHistoryScreen({ goToScreen }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      <Text style={styles.order}>#001 - Chicken Burger Combo - R65</Text>
      <Text style={styles.order}>#002 - Creamy Pasta Bowl - R70</Text>

      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Home')}>
        <Text style={styles.buttonText}>Back Home</Text>
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
    marginBottom: 20,
  },
  order: {
    fontSize: 16,
    color: '#354F52',
    marginBottom: 12,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
  },
  button: {
    backgroundColor: '#FF5E3A',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});