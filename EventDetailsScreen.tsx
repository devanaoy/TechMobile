
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const App = () => {
  const events = [
    { name: 'Event 1', date: 'April 25, 2024', time: '10:00 AM' },
    { name: 'Event 2', date: 'April 26, 2024', time: '2:00 PM' },
    { name: 'Event 3', date: 'April 27, 2024', time: '6:00 PM' },
  ];

  const handleEventPress = (event: { name: string, date: string, time: string }) => {
    Alert.alert('Event Details', `${event.name}\nDate: ${event.date}\nTime: ${event.time}`);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./images.png')} style={styles.logo} />
      <Text style={styles.title}>Events</Text>
      {events.map((event, index) => (
        <TouchableOpacity
          key={index}
          style={styles.eventItem}
          onPress={() => handleEventPress(event)}
        >
          <Image source={require('./etc.jpeg')} style={styles.eventIcon} />
          <View style={styles.eventDetails}>
            <Text style={styles.eventName}>{event.name}</Text>
            <Text style={styles.eventDateTime}>{event.date} at {event.time}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <Image source={require('./stock-vector-ticket-icon-vector-line-raffle-ticket-symbol-trendy-flat-outline-ui-sign-design-thin-linear-1050259787.jpg')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Light Gray
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark Gray
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFFFFF', // White
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  eventDetails: {
    flex: 1,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  eventDateTime: {
    fontSize: 16,
    color: '#666',
  },
});

export default App;





