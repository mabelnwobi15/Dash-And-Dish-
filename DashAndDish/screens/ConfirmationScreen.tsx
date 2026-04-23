import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type ScreenName =
  | "Splash"
  | "Auth"
  | "Home"
  | "Menu"
  | "DishDetail"
  | "Cart"
  | "Checkout"
  | "Confirmation"
  | "Orders"
  | "Profile"
  | "RestaurantInfo";

type Props = {
  goToScreen: (screen: ScreenName) => void;
};

export default function ConfirmationScreen({ goToScreen }: Props) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.back(1.5)),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.checkCircle, { transform: [{ scale: scaleAnim }] }]}
      >
        <Text style={styles.checkMarkText}>✓</Text>
      </Animated.View>

      <Animated.View style={{ opacity: opacityAnim, alignItems: "center" }}>
        <Text style={styles.title}>Order Confirmed 🎉</Text>
        <Text style={styles.subtitle}>Your meal is being prepared.</Text>

        <View style={styles.estimatedTimeContainer}>
          <Text style={styles.estimatedTimeLabel}>Estimated Delivery Time</Text>
          <Text style={styles.estimatedTime}>20-30 mins</Text>
        </View>
      </Animated.View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goToScreen("Home")}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => goToScreen("Orders")}
      >
        <Text style={styles.secondaryButtonText}>View Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F4FE",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  checkCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#A3C9A8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 28,
  },
  checkMarkText: {
    fontSize: 52,
    color: "#fff",
    lineHeight: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#354F52",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#354F52",
    marginBottom: 28,
    textAlign: "center",
  },
  estimatedTimeContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 28,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A3C9A8",
  },
  estimatedTimeLabel: {
    fontSize: 14,
    color: "#6B8F71",
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  estimatedTime: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#354F52",
  },
  button: {
    backgroundColor: "#FF5E3A",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 14,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#A3C9A8",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  secondaryButtonText: {
    color: "#354F52",
    fontWeight: "bold",
  },
});
