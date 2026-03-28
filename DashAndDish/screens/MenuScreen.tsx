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

export default function MenuScreen({ goToScreen }: Props) {
  const meals = [
    { name: 'Chicken Burger Combo', price: 'R65' },
    { name: 'Creamy Pasta Bowl', price: 'R70' },
    { name: 'Student Beef Wrap', price: 'R55' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {meals.map((meal, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.mealName}>{meal.name}</Text>
          <Text style={styles.price}>{meal.price}</Text>

          <TouchableOpacity style={styles.button} onPress={() => goToScreen('DishDetail')}>
            <Text style={styles.buttonText}>View Dish</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.secondaryButton} onPress={() => goToScreen('Home')}>
        <Text style={styles.secondaryButtonText}>Back Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E6F4FE',
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#354F52',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#354F52',
  },
  price: {
    fontSize: 16,
    color: '#FF5E3A',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FF5E3A',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  secondaryButton: {
    marginTop: 12,
    backgroundColor: '#A3C9A8',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#354F52',
    fontWeight: 'bold',
  },
});