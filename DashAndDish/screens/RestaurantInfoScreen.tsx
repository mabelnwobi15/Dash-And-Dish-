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

export default function RestaurantInfoScreen({ goToScreen }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <View style={styles.logoWrapper}>
        <Text style={styles.logoDash}>DASH</Text>
        <Text style={styles.logoN}>n</Text>
        <Text style={styles.logoDine}>DINE</Text>
      </View>

      <Text style={styles.est}>EST. 2026</Text>
      <Text style={styles.tagline}>FRESH. FAST. FOR STUDENTS.</Text>

      {/* Story of Dash n dine */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Story</Text>
        <Text style={styles.cardText}>
          Dash n Dine was born from a simple idea: great food shouldn't break a student's budget. 
          Founded in 2026, we set out to create a canteen experience that's fast, affordable, 
          and actually tastes good.
        </Text>
      </View>

      {/* Our Mission */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Our Mission</Text>
        <Text style={styles.cardText}>
          To make delicious, nutritious meals accessible to every student on campus. 
          No more overpriced cafeteria food, just quality dishes at prices you can afford.
        </Text>
      </View>

      <Text style={styles.sectionHeader}>Why Choose Us</Text>

      {/* Features */}
      <View style={styles.feature}>
        <Text style={styles.featureIcon}>💰</Text>
        <View style={styles.featureTextWrapper}>
          <Text style={styles.featureTitle}>Affordable</Text>
          <Text style={styles.featureDesc}>Meals under R100 for students</Text>
        </View>
      </View>

      <View style={styles.feature}>
        <Text style={styles.featureIcon}>⚡</Text>
        <View style={styles.featureTextWrapper}>
          <Text style={styles.featureTitle}>Fast Pickup</Text>
          <Text style={styles.featureDesc}>Ready in 15 minutes or less</Text>
        </View>
      </View>

      <View style={styles.feature}>
        <Text style={styles.featureIcon}>🎓</Text>
        <View style={styles.featureTextWrapper}>
          <Text style={styles.featureTitle}>Student-First</Text>
          <Text style={styles.featureDesc}>Located right on campus</Text>
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Home')}>
        <Text style={styles.buttonText}>Back Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E6F4FE',
    padding: 24,
    alignItems: 'center',
  },
  // Logo styles
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginBottom: 12,
  },
  logoDash: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FF5E3A',
    letterSpacing: 2,
  },
  logoN: {
    fontSize: 28,
    fontWeight: '600',
    color: '#354F52',
    marginHorizontal: 6,
  },
  logoDine: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#354F52',
    letterSpacing: 2,
  },
  est: {
    fontSize: 12,
    fontWeight: '500',
    color: '#354F52',
    opacity: 0.7,
    marginBottom: 8,
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF9A6C',
    marginBottom: 32,
    letterSpacing: 1.5,
  },
  // Card styles 
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5E3A',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#354F52',
    lineHeight: 22,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#354F52',
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 16,
  },
  // Feature styles
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  featureTextWrapper: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF5E3A',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 13,
    color: '#354F52',
  },
  // Button styles 
  button: {
    backgroundColor: '#FF5E3A',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 16,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});