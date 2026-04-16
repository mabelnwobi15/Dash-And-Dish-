import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
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

type ScreenProps = {
  goToScreen: (screen: ScreenName) => void;
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('Splash');

  const goToScreen = (screen: ScreenName) => setCurrentScreen(screen);

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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F4FE',
  },
});