import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ImageBackground, Modal, TextInput, Image } from 'react-native';

const App = () => {
  const [ticketCounts, setTicketCounts] = useState([10, 20, 15, 8, 5]); // Initial ticket counts
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const events = [
    { name: 'Summer Beach Party', date: 'May 7, 2024', time: '06:00 PM', index: 0, category: 'Parties', price: 20 },
    { name: 'Neon Glow Rave', date: 'May 26, 2024', time: '2:00 PM', index: 1, category: 'Parties', price: 15 },
    { name: 'Electronic Beats', date: 'April 27, 2024', time: '6:00 PM', index: 2, category: 'Concerts', price: 30 },
    { name: 'Rock Fest 2024', date: 'June 04, 2024', time: '8:00 PM', index: 3, category: 'Concerts', price: 25 },
    { name: 'Jazz Night', date: 'June 27, 2024', time: '7:00 PM', index: 4, category: 'Concerts', price: 35 },
    { name: 'Photo Expo', date: 'May 1, 2024', time: '11:00 AM', index: 5, category: 'Arts', price: 10 },
  ];

  const handleBookNow = (index: number) => {
    setSelectedEvent(events[index]);
    setPaymentModalVisible(true);
  };

  const handlePaymentConfirm = () => {
    // Validate card number
    const cardNumRegex = /^[0-9]{16}$/;
    if (!cardNumRegex.test(cardNumber)) {
      Alert.alert('Invalid Card Number', 'Card number must be a 16-digit number.');
      return;
    }

    // Validate expiry date (format: MM/YY)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    if (!expiryDateRegex.test(expiryDate)) {
      Alert.alert('Invalid Expiry Date', 'Expiry date must be in format MM/YY.');
      return;
    }

    // Validate CVV
    const cvvRegex = /^[0-9]{3}$/;
    if (!cvvRegex.test(cvv)) {
      Alert.alert('Invalid CVV', 'CVV must be a 3-digit number.');
      return;
    }

    // Payment confirmation logic here
    // For now, just display an alert
    Alert.alert('Payment Confirmed', `Payment confirmed for ${selectedEvent.name}.`);
    setPaymentModalVisible(false);
    const newTicketCounts = [...ticketCounts];
    if (newTicketCounts[selectedEvent.index] > 0) {
      newTicketCounts[selectedEvent.index]--;
      setTicketCounts(newTicketCounts);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <ImageBackground source={require('./images-3.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./images.png')} style={styles.logo} />
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={[styles.menuItem, { backgroundColor: '#FF5733' }]} onPress={() => handleCategorySelect('Parties')}>
            <Text>Parties</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, { backgroundColor: '#33FF8D' }]} onPress={() => handleCategorySelect('Concerts')}>
            <Text>Concerts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, { backgroundColor: '#338DFF' }]} onPress={() => handleCategorySelect('Arts')}>
            <Text>Arts</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.eventsContainer}>
          {selectedCategory && (
            <>
              <Text style={styles.categoryTitle}>{selectedCategory}</Text>
              <View style={styles.eventList}>
                {events.map((event, index) => {
                  if (event.category === selectedCategory) {
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.eventItem}
                        onPress={() => handleBookNow(index)}
                      >
                        <View style={styles.eventLeft}>
                          <Image source={require('./etc.jpeg')} style={styles.eventIcon} />
                          <View style={styles.eventDetails}>
                            <Text style={styles.eventName}>{event.name}</Text>
                            <Text style={styles.eventDateTime}>{event.date} at {event.time}</Text>
                            <Text style={styles.eventPrice}>Price: ${event.price}</Text>
                            <Text style={styles.ticketCount}>Tickets Available: {ticketCounts[event.index]}</Text>
                          </View>
                        </View>
                        <View style={styles.bookButtonContainer}>
                          <Text style={styles.bookButtonText}>Book Now</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }
                })}
              </View>
            </>
          )}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={paymentModalVisible}
          onRequestClose={() => setPaymentModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.cancelIcon}
                onPress={() => setPaymentModalVisible(false)}
              >
                <Text>X</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Make Payment</Text>
              <TextInput
                style={styles.input}
                placeholder="Card Number"
                onChangeText={(text) => setCardNumber(text)}
                keyboardType="numeric"
                maxLength={16}
              />
              <TextInput
                style={styles.input}
                placeholder="Expiry Date (MM/YY)"
                onChangeText={(text) => setExpiryDate(text)}
                maxLength={5}
              />
              <TextInput
                style={styles.input}
                placeholder="CVV (3 digits)"
                onChangeText={(text) => setCvv(text)}
                keyboardType="numeric"
                maxLength={3}
              />
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handlePaymentConfirm}
              >
                <Text style={styles.confirmButtonText}>Confirm Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background overlay
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 150,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF', // White
  },
  menuItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  eventsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  eventList: {
    width: '100%',
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0', // Light Gray
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  eventLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  eventDetails: {},
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  eventDateTime: {
    fontSize: 14,
    color: '#666',
  },
  eventPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007bff', // Blue
  },
  ticketCount: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  bookButtonContainer: {
    backgroundColor: '#007bff', // Blue
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#FFF', // White
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#007bff', // Blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#FFF', // White
    fontWeight: 'bold',
  },
  cancelIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
});

export default App;
