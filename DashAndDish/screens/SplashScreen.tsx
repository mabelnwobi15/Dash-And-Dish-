import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type Props = {
  goToScreen: (screen: string) => void;
};

export default function SplashScreen({ goToScreen }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      goToScreen('Auth');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Dash n Dish</Text>
      <Text style={styles.subtitle}>Fast food delivery at your fingertips</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 280,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F3A44',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#FF5A36',
    textAlign: 'center',
  },
});