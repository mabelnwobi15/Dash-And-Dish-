import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

// Import all screens from the screens folder
import SplashScreen from './screens/SplashScreen';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import RestaurantInfoScreen from './screens/RestaurantInfoScreen';

type ScreenName = string;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('Splash');

  const goToScreen = (screen: ScreenName) => setCurrentScreen(screen);

  const showBottomNav = ['Home', 'Menu', 'Cart', 'Profile'].includes(currentScreen);

  return (
    <View style={styles.container}>
      {currentScreen === 'Splash' && <SplashScreen goToScreen={goToScreen} />}
      {currentScreen === 'Auth' && <AuthScreen goToScreen={goToScreen} />}
      {currentScreen === 'Home' && <HomeScreen goToScreen={goToScreen} />}
      {currentScreen === 'Menu' && <MenuScreen goToScreen={goToScreen} />}
      {currentScreen === 'DishDetail' && <DishDetailScreen goToScreen={goToScreen} />}
      {currentScreen === 'Cart' && <CartScreen goToScreen={goToScreen} />}
      {currentScreen === 'Checkout' && <CheckoutScreen goToScreen={goToScreen} />}
      {currentScreen === 'Confirmation' && <ConfirmationScreen goToScreen={goToScreen} />}
      {currentScreen === 'Orders' && <OrderHistoryScreen goToScreen={goToScreen} />}
      {currentScreen === 'Profile' && <ProfileScreen goToScreen={goToScreen} />}
      {currentScreen === 'RestaurantInfo' && <RestaurantInfoScreen goToScreen={goToScreen} />}

      {showBottomNav && (
        <View style={styles.bottomNav}>
          <NavItem
            icon="home"
            label="Home"
            active={currentScreen === 'Home'}
            onPress={() => goToScreen('Home')}
          />
          <NavItem
            icon="cart"
            label="Cart"
            active={currentScreen === 'Cart'}
            onPress={() => goToScreen('Cart')}
          />
          <NavItem
            icon="restaurant"
            label="Menu"
            active={currentScreen === 'Menu'}
            onPress={() => goToScreen('Menu')}
          />
          <NavItem
            icon="person"
            label="Profile"
            active={currentScreen === 'Profile'}
            onPress={() => goToScreen('Profile')}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

function NavItem({
  icon,
  label,
  active,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  const outlineIcon = `${icon}-outline` as keyof typeof Ionicons.glyphMap;

  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Ionicons
        name={active ? icon : outlineIcon}
        size={24}
        color={active ? '#2563EB' : '#7A7A7A'}
      />
      <Text style={[styles.navText, active && styles.activeText]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4FE',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#DDE7F0',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    marginTop: 4,
    fontSize: 12,
    color: '#7A7A7A',
  },
  activeText: {
    color: '#2563EB',
    fontWeight: '600',
  },
});