import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

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

export default function HomeScreen({ goToScreen }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Fresh meals for busy students 🍽️</Text>

      <TouchableOpacity style={styles.card} onPress={() => goToScreen('Menu')}>
        <Text style={styles.cardTitle}>View Menu</Text>
        <Text style={styles.cardText}>See available dishes and meals</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => goToScreen('DishDetail')}>
        <Text style={styles.cardTitle}>Dish Details</Text>
        <Text style={styles.cardText}>View a selected dish, price, and description</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => goToScreen('Orders')}>
        <Text style={styles.cardTitle}>Order History</Text>
        <Text style={styles.cardText}>Check your previous orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => goToScreen('Profile')}>
        <Text style={styles.cardTitle}>Profile</Text>
        <Text style={styles.cardText}>Manage your account details</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => goToScreen('RestaurantInfo')}>
        <Text style={styles.cardTitle}>Restaurant Info</Text>
        <Text style={styles.cardText}>Learn more about Dash & Dish</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#E6F4FE',
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#354F52',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#354F52',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5E3A',
    marginBottom: 6,
  },
  cardText: {
    color: '#354F52',
    fontSize: 14,
  },
});