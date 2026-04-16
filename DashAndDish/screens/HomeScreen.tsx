import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type Props = {
  goToScreen: (screen: string) => void;
};

export default function HomeScreen({ goToScreen }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.welcome}>Welcome to Dash n Dish</Text>
      <Text style={styles.subtitle}>Your favourite meals, delivered quickly.</Text>

      <TouchableOpacity style={styles.button} onPress={() => goToScreen('Menu')}>
        <Text style={styles.buttonText}>Browse Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4FE',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  logo: {
    width: 220,
    height: 140,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1F3A44',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#FF5A36',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF5A36',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});