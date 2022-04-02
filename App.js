// App.js
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';
import SearchScreen from './screens/SearchScreen';


function HeaderIcon() {
  return (
    <Image
      source={require('/assets/snack-icon.png')}
      style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }}
    />
  );
}

const Stack = createStackNavigator();
function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'PopcornTime',
          headerLeft: (props) => <HeaderIcon {...props} />,
          headerRight: (props) => <HeaderIcon {...props} />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitle: 'PopcornTime',
          headerRight: (props) => <HeaderIcon {...props} />,
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: 'PopcornTime',
          headerRight: (props) => <HeaderIcon {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
