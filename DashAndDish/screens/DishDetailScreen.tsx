import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

type Props = {
  goToScreen: (screen: any) => void;
  addToCart: (name: string, price: string) => void;
};

const meals = [
  { name: 'Classic Burger & Fries', price: 'R80', desc: 'Juicy beef burger and fries.', category: 'Meal', image: 'https://via.placeholder.com/150' },
  { name: 'Chicken Pizza', price: 'R120', desc: 'Wood-fired chicken pizza.', category: 'Meal', image: 'https://via.placeholder.com/150' },
  { name: 'Steak & Mash', price: 'R150', desc: 'Grilled steak and mash.', category: 'Meal', image: 'https://via.placeholder.com/150' },
];

const drinks = [
  { name: 'Coke', price: 'R20', desc: 'Refreshing Coca-Cola.', category: 'Drink', image: 'https://via.placeholder.com/150' },
  { name: 'Lemonade', price: 'R25', desc: 'Fresh homemade lemonade.', category: 'Drink', image: 'https://via.placeholder.com/150' },
];

export default function DishDetailScreen({ goToScreen, addToCart }: Props) {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Popular Meals</Text>
        {meals.map((food, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: food.image }} style={styles.image} />
            <Text style={styles.foodName}>{food.name}</Text>
            <View style={styles.bottomRow}>
              <Text style={styles.price}>{food.price}</Text>
              <TouchableOpacity style={styles.button} onPress={() => addToCart(food.name, food.price)}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Drinks</Text>
        {drinks.map((drink, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.foodName}>{drink.name}</Text>
            <View style={styles.bottomRow}>
              <Text style={styles.price}>{drink.price}</Text>
              <TouchableOpacity style={styles.button} onPress={() => addToCart(drink.name, drink.price)}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F7F9', padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginVertical: 10 },
  card: { backgroundColor: '#fff', borderRadius: 18, padding: 14, marginBottom: 16 },
  image: { width: '100%', height: 160, borderRadius: 14 },
  foodName: { fontSize: 18, fontWeight: '700', marginTop: 10 },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  price: { fontSize: 16, fontWeight: '800', color: '#FF5E3A' },
  button: { backgroundColor: '#FF5E3A', padding: 10, borderRadius: 10 },
  buttonText: { color: '#fff', fontWeight: '700' },
});