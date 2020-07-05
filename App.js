import React, { Component } from 'react';
import { Image } from 'react-native';
import * as Font from 'expo-font';
import Home from './Component/Home'
import {SearchBar} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, Card, Icon,Item,Input, Title, CardItem, Thumbnail, Text, Button,  Left, Body, Right } from 'native-base';
import MyStack from './Component/MainTabs';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
     
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Roboto_bold: require('native-base/Fonts/Foundation.ttf'),
      Light:require('./assets/Poppins-Light.ttf'),
      Medium:require('./assets/Poppins-Medium.ttf'),
      Regular:require('./assets/Poppins-Regular.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
  
    return (
      
      <Container>
         {
          this.state.isReady&&
          <>
          <MyStack/>
        </>
        }
       
       
      </Container>
    );
  }
}