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
  const [cart, setCart] = useState<CartItem[]>([]);

  const goToScreen = (screen: ScreenName) => setCurrentScreen(screen);

  const showBottomNav = ['Home', 'Menu', 'Cart', 'Profile'].includes(currentScreen);

// Function to add items from DishDetail to Cart
  const addToCart = (name: string, priceString: string) => {
    
    const price = parseInt(priceString.replace('R', ''));

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { name, price, quantity: 1 }];
    });
    goToScreen('Cart');
  };

  // Function to change quantities inside the Cart screen
  const updateQuantity = (name: string, amount: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Splash' && <SplashScreen goToScreen={goToScreen} />}
      {currentScreen === 'Auth' && <AuthScreen goToScreen={goToScreen} />}
      {currentScreen === 'Home' && <HomeScreen goToScreen={goToScreen} />}
      {currentScreen === 'Menu' && <MenuScreen goToScreen={goToScreen} />}
      
      {currentScreen === 'DishDetail' && (
        <DishDetailScreen goToScreen={goToScreen} addToCart={addToCart} />
      )}
      
      {currentScreen === 'Cart' && (
        <CartScreen 
          goToScreen={goToScreen} 
          cartItems={cart} 
          updateQuantity={updateQuantity} 
        />
      )}

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
});