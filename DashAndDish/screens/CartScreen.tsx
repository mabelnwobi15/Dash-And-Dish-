import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function CartScreen({ goToScreen, cartItems, updateQuantity }: any) {
  
  const totalAmount = (cartItems || []).reduce(
    (sum: number, item: any) => sum + item.price * item.quantity, 
    0
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goToScreen('Menu')} style={styles.headerBackBtn}>
          <Text style={styles.headerBackText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Order Review 🛒</Text>
      </View>

      <ScrollView style={styles.itemsList}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty!</Text>
        ) : (
          cartItems.map((item: any, index: number) => (
            <View key={index} style={styles.itemCard}>
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>R{item.price} each</Text>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQuantity(item.name, -1)}>
                  <Text style={styles.qtyBtnText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.quantity}</Text>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQuantity(item.name, 1)}>
                  <Text style={styles.qtyBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>R{totalAmount}</Text>
        </View>
        <TouchableOpacity 
          style={[styles.button, cartItems.length === 0 && {backgroundColor: '#ccc'}]} 
          onPress={() => cartItems.length > 0 && goToScreen('Checkout')}
          disabled={cartItems.length === 0}
        >
          <Text style={styles.buttonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.secondaryButton} onPress={() => goToScreen('Menu')}>
          <Text style={styles.secondaryButtonText}>Add More Items</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E6F4FE' },
  
  // UPDATED HEADER STYLES
  header: { 
    paddingTop: 60, 
    paddingHorizontal: 24, 
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerBackBtn: {
    marginRight: 16,
    padding: 4,
  },
  headerBackText: {
    fontSize: 28,
    color: '#354F52',
    fontWeight: 'bold',
  },
  
  title: { fontSize: 28, fontWeight: 'bold', color: '#354F52' },
  itemsList: { flex: 1, paddingHorizontal: 24 },
  itemCard: { backgroundColor: '#fff', borderRadius: 16, padding: 16, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  itemName: { fontWeight: '700', fontSize: 16, color: '#354F52' },
  itemPrice: { color: '#FF5E3A', marginTop: 4 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { width: 32, height: 32, backgroundColor: '#F5F7F9', justifyContent: 'center', alignItems: 'center', borderRadius: 8 },
  qtyBtnText: { fontSize: 18, fontWeight: 'bold', color: '#354F52' },
  qtyText: { marginHorizontal: 12, fontWeight: 'bold', fontSize: 16, color: '#354F52' },
  footer: { backgroundColor: '#fff', padding: 24, borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  totalLabel: { fontSize: 18, fontWeight: 'bold', color: '#354F52' },
  totalValue: { fontSize: 22, fontWeight: '900', color: '#FF5E3A' },
  button: { backgroundColor: '#FF5E3A', padding: 16, borderRadius: 14, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  emptyText: { textAlign: 'center', marginTop: 50, fontSize: 16, color: '#777' },
  secondaryButton: { alignItems: 'center', marginTop: 12, padding: 10 },
  secondaryButtonText: { color: '#354F52', fontWeight: '600', fontSize: 14 },
});