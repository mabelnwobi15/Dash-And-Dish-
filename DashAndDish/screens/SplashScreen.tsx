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

export default function SplashScreen({ goToScreen }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dash & Dish</Text>
      <Text style={styles.subtitle}>Canteen and restaurant app for students</Text>

      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Auth')}>
        <Text style={styles.buttonText}>Get Started</Text>
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
    fontSize: 34,
    fontWeight: 'bold',
    color: '#354F52',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#354F52',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF5E3A',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 14,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});