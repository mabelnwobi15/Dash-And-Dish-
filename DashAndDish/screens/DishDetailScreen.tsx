import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

type Props = {
  goToScreen: (screen: string) => void;
};

const dishes = [
  {
    name: 'Classic Burger and Fries',
    price: 'R100',
    desc: 'Juicy beef patty with melted cheese, lettuce, tomato, and a side of crispy fries.',
    category: 'Burgers',
    image:
      'https://th.bing.com/th/id/OIP.b04ViE1kGi797sQW5mRPZQHaE8?w=290&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    rating: '4.8',
    time: '20 min',
  },
  {
    name: 'Lasagna',
    price: 'R120',
    desc: 'Layers of pasta, rich meat sauce, creamy béchamel, and melted cheese baked to perfection.',
    category: 'Lasagna',
    image:
      'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=800&q=80',
    rating: '4.7',
    time: '25 min',
  },
  {
    name: 'Chicken Pizza',
    price: 'R80',
    desc: 'Thin crust pizza topped with grilled chicken, mozzarella cheese, and fresh basil.',
    category: 'Pizza',
    image:
      'https://www.allthingsmamma.com/wp-content/uploads/2023/04/buffalo-chicken-pizza-hero-3.jpg',
    rating: '4.9',
    time: '18 min',
  },
  {
    name: 'Steak and Mash',
    price: 'R150',
    desc: 'Grilled steak served with creamy mashed potatoes and sautéed vegetables.',
    category: 'Steak',
    image:
      'https://thumbs.dreamstime.com/b/beef-steak-potato-mash-roasted-vegetables-medium-rare-beef-steak-brown-gravy-mashed-potato-roasted-brussels-258398507.jpg',
    rating: '4.6',
    time: '30 min',
  },
];

export default function DishDetailScreen({ goToScreen }: Props) {
  const [quantities, setQuantities] = useState<number[]>(
    dishes.map(() => 1)
  );

  const increaseQty = (index: number) => {
    const updated = [...quantities];
    updated[index] += 1;
    setQuantities(updated);
  };

  const decreaseQty = (index: number) => {
    const updated = [...quantities];
    if (updated[index] > 1) {
      updated[index] -= 1;
      setQuantities(updated);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <Text style={styles.title}>Dish Details</Text>
          <Text style={styles.subtitle}>
            Choose your favourite meal and add it to your cart.
          </Text>

          <View style={styles.infoRow}>
            <View style={styles.infoPill}>
              <Text style={styles.infoPillText}>🔥 Popular Picks</Text>
            </View>
            <View style={styles.infoPillLight}>
              <Text style={styles.infoPillTextLight}>Fast Delivery</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Available Dishes</Text>

        {dishes.map((dish, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: dish.image }} style={styles.image} />

            <TouchableOpacity style={styles.favoriteBtn}>
              <Text style={styles.favoriteText}>♡</Text>
            </TouchableOpacity>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>{dish.category}</Text>
            </View>

            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.desc}>{dish.desc}</Text>

            <View style={styles.metaRow}>
              <Text style={styles.metaText}>⭐ {dish.rating}</Text>
              <Text style={styles.metaText}>🕒 {dish.time}</Text>
            </View>

            <View style={styles.bottomRow}>
              <Text style={styles.price}>{dish.price}</Text>

              <View style={styles.qtyContainer}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => decreaseQty(index)}
                >
                  <Text style={styles.qtyButtonText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qtyText}>{quantities[index]}</Text>

                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() => increaseQty(index)}
                >
                  <Text style={styles.qtyButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => goToScreen('Cart')}
            >
              <Text style={styles.buttonText}>
                Add {quantities[index]} to Cart
              </Text>
            </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: '#EEF7FD',
    padding: 16,
  },

  heroCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 22,
    marginBottom: 20,
    elevation: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1D2746',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
  },

  infoRow: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 10,
    flexWrap: 'wrap',
  },

  infoPill: {
    backgroundColor: '#FFEEE8',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  infoPillLight: {
    backgroundColor: '#E0F2FE',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  infoPillText: {
    color: '#FF5E3A',
    fontWeight: '700',
    fontSize: 13,
  },

  infoPillTextLight: {
    color: '#0284C7',
    fontWeight: '700',
    fontSize: 13,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 12,
    color: '#1D2746',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 20,
    marginBottom: 16,
    elevation: 3,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 16,
    marginBottom: 12,
  },

  favoriteBtn: {
    position: 'absolute',
    top: 24,
    left: 24,
    backgroundColor: '#FFFFFF',
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    zIndex: 2,
  },

  favoriteText: {
    fontSize: 18,
    color: '#FF5E3A',
    fontWeight: '700',
  },

  badge: {
    position: 'absolute',
    top: 24,
    right: 24,
    backgroundColor: '#FF5E3A',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    zIndex: 2,
  },

  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },

  dishName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1D2746',
  },

  desc: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 8,
    lineHeight: 21,
  },

  metaRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 10,
  },

  metaText: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '600',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },

  price: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2A1915',
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  qtyButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF5E3A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyButtonText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },

  qtyText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '700',
    color: '#1D2746',
  },

  button: {
    marginTop: 16,
    backgroundColor: '#FF5E3A',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 15,
  },

  backButton: {
    marginTop: 8,
    alignItems: 'center',
    marginBottom: 24,
  },

  backText: {
    color: '#354F52',
    fontWeight: '700',
    fontSize: 15,
  },
});