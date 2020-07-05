import React, { Component } from 'react';
import { ActivityIndicator ,View,ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import {SearchBar, Image} from 'react-native-elements'
import Scrollbar from './Scollbar'
import HeaderComponent from './Header'
import Showcase from './Showcase'
import { Ionicons } from '@expo/vector-icons';
import { Container,  Content, Card, Icon,Item,Input,Tab,Header, Tabs, ScrollableTab , Title, CardItem, Thumbnail, Text, Button,  Left, Body, Right } from 'native-base';
// import Sidebar from './Drawer';
export default class Home extends Component {
  constructor(props) {
    super(props);
 
  }
  render() {
    return (     
      <Container>
          <>
          {/* <Sidebar/> */}
          <HeaderComponent navigation={this.props.navigation}/>
          <ScrollView>
          <Showcase/>
          <Scrollbar navigation={this.props.navigation}/>
          
         
          </ScrollView>
           {
             this.props.route.params&&
              <View style={{paddingHorizontal:10, paddingVertical:7}}>
             <Button style={{height:50}} success  onPress={()=> this.props.navigation.navigate('Order')}>
                <Text style={{textTransform:'capitalize'}}>5 Item</Text>
                <Text style={{fontSize:16}}>VIEW ORDER</Text>
                <Text style={{textTransform:'capitalize'}}>₦4000</Text>
              </Button>
            </View>
           }
           
        
         
         
         
         


         </>
        
       
       
      </Container>
    );
  }
}