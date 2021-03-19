import React, { Component } from 'react';
import { Image, View, ActivityIndicator} from 'react-native';
import * as Font from 'expo-font';
import { SearchBar } from 'react-native-elements'
// import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, Card, Icon, Item, Input, Title, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
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
      Light: require('./assets/Poppins-Light.ttf'),
      Medium: require('./assets/Poppins-Medium.ttf'),
      Regular: require('./assets/Poppins-Regular.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    // const firebaseConfig = {
    //   apiKey: "AIzaSyAc0zU5ZUW3qiYnO6T0bpgj6m5KxZqkJvo",
    //   authDomain: "upload-2d878.firebaseapp.com",
    //   databaseURL: "https://upload-2d878.firebaseio.com",
    //   projectId: "upload-2d878",
    //   storageBucket: "upload-2d878.appspot.com",
    //   messagingSenderId: "656918762064",
    //   appId: "1:656918762064:web:bfd0013720b64b9ea3b755",
    //   measurementId: "G-Q76V627KQ2"
    // };
    //  firebase.initializeApp(firebaseConfig);
   
    return (
      <Container>
        {
          this.state.isReady ?
          <>
            <MyStack />
          </>
          :
          <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
             <ActivityIndicator size="small"/>
          </View>
        }
      </Container>
    );
  }
}