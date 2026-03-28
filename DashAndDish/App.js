import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import DishDetailScreen from './DishDetailScreen';
import CartScreen from './CartScreen';
import CheckoutScreen from './CheckoutScreen';
import ConfirmationScreen from './ConfirmationScreen';
import OrderHistoryScreen from './OrderHistoryScreen';
import ProfileScreen from './ProfileScreen';
import RestaurantInfoScreen from './RestaurantInfoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="DishDetail" component={DishDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="Orders" component={OrderHistoryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="RestaurantInfo" component={RestaurantInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}