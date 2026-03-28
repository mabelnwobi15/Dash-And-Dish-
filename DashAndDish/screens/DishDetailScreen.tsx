import React from 'react';
import {
  View,
  Text,
  StyleSheet,
 ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

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

const meals = [
  {
    name: 'Classic Burger & Fries',
    price: 'R80',
    desc: 'Juicy beef burger served with crispy golden fries.',
    category: 'Meal',
    image:
      'data:image/webp;base64,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',
  },
  {
    name: 'Chicken Pizza',
    price: 'R120',
    desc: 'Wood-fired chicken pizza with cheese and fresh toppings.',
    category: 'Meal',
    image:
      'https://th.bing.com/th/id/OIP.8ZZhp_agt-9FGDKETgWHtwHaLH?w=186&h=341&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
  },
  {
    name: 'Steak & Mash',
    price: 'R150',
    desc: 'Grilled steak served with creamy mashed potatoes.',
    category: 'Meal',
    image:
      'https://thumbs.dreamstime.com/z/beef-steak-potato-mash-roasted-vegetables-medium-rare-brown-gravy-mashed-brussels-sprouts-pepper-carrots-white-plate-257920101.jpg',
  },
];

const drinks = [
  {
    name: 'Coke',
    price: 'R20',
    desc: 'Refreshing chilled Coca-Cola.',
    category: 'Drink',
    image:
      'https://th.bing.com/th/id/OIP.qVe5KS6Wn_ScpohHYI__2gHaHa?w=155&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
  },
  {
    name: 'Passion Fruit Mocktail',
    price: 'R35',
    desc: 'Sweet and tangy passion fruit mocktail.',
    category: 'Drink',
    image:
      'https://th.bing.com/th/id/OIP.euqXTDsfrUuSjfTOf7eJCwHaLH?w=186&h=279&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
  },
  {
    name: 'Lemonade',
    price: 'R25',
    desc: 'Fresh homemade lemonade served cold.',
    category: 'Drink',
    image:
      'https://th.bing.com/th/id/OIP.k5zh_dLcRR26rew52dcUmQHaJ4?w=186&h=248&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
  },
];

export default function DishDetailScreen({ goToScreen }: Props) {
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerCard}>
          <Text style={styles.title}>Dish Details 🍽️</Text>
          <Text style={styles.subtitle}>
            Explore our popular meals and refreshing drinks.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Popular Meals</Text>

        {meals.map((food, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: food.image }} style={styles.image} />

            <View style={styles.badge}>
              <Text style={styles.badgeText}>{food.category}</Text>
            </View>

            <Text style={styles.foodName}>{food.name}</Text>
            <Text style={styles.desc}>{food.desc}</Text>

            <View style={styles.bottomRow}>
              <Text style={styles.price}>{food.price}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => goToScreen('Cart')}
              >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Drinks</Text>

        {drinks.map((drink, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: drink.image }} style={styles.image} />

            <View style={[styles.badge, styles.drinkBadge]}>
              <Text style={styles.badgeText}>{drink.category}</Text>
            </View>

            <Text style={styles.foodName}>{drink.name}</Text>
            <Text style={styles.desc}>{drink.desc}</Text>

            <View style={styles.bottomRow}>
              <Text style={styles.price}>{drink.price}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => goToScreen('Cart')}
              >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => goToScreen('Menu')}
        >
          <Text style={styles.backText}>← Back to Menu</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F7F9',
    padding: 16,
  },

  headerCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1D2746',
  },

  subtitle: {
    marginTop: 5,
    color: '#6B7280',
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 6,
    color: '#1D2746',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 16,
    padding: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },

  image: {
    width: '100%',
    height: 160,
    borderRadius: 14,
    marginBottom: 10,
  },

  badge: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#FF5E3A',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  drinkBadge: {
    backgroundColor: '#354F52',
  },

  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },

  foodName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1D2746',
  },

  desc: {
    fontSize: 14,
    color: '#6B7280',
    marginVertical: 6,
    lineHeight: 20,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  price: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FF5E3A',
  },

  button: {
    backgroundColor: '#FF5E3A',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },

  backButton: {
    marginTop: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  backText: {
    color: '#354F52',
    fontWeight: '600',
    fontSize: 14,
  },
});