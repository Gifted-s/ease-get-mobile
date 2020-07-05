import React from 'react'
import {Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Home from './Home'
import { NativeScreenContainer } from 'react-native-screens';
import  Item from './Item';
import Delivery from './Delivery';
import Order from './Order';
import Service from './Services';
import About from './About';
import Contact from './Contact'
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode="none" mode="modal" >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Item" component={Item} />
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Service" component={Service} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack