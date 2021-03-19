import React from 'react'
import {Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Home from './Home'
import SignIn from './SignIn';
import Preload from './Preload';
import OTP from './OTP';
import Dashboard from './Dashboard';
import Homes from './Homes';
import EachHouse from './EachHouse';
import  Forgot  from './Forgot';
import EditApartment from './EditApartment';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode="none" mode="modal" >
    
    <Stack.Screen name="Preload" component={Preload}/>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="OTP" component={OTP} />
    <Stack.Screen name="Dashboard" component={Dashboard}/>
    <Stack.Screen name="Homes" component={Homes}/>
    <Stack.Screen name="EachHouse" component={EachHouse}/>
    <Stack.Screen name="Forgot" component={Forgot}/>
    <Stack.Screen name="EditA" component={EditApartment}/>
    
   
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack