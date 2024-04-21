// AppNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App'; // Import your App component
import EventDetailsScreen from './EventDetailsScreen';
import { YourStackParamList } from './YourStackParamList';

const Stack = createStackNavigator<YourStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={App}
        // Pass navigation prop here
        options={({ navigation }) => ({ headerShown: false, navigation })}
      />
      <Stack.Screen name="EventDetails" component={EventDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
