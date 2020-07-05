import React, { Component } from 'react';
import { ActivityIndicator ,View, Dimensions} from 'react-native';
import * as Font from 'expo-font';
import {SearchBar, Image} from 'react-native-elements'

import { Ionicons } from '@expo/vector-icons';
import { Container,  Content, Card, Icon,Item,Input, Title, CardItem, Thumbnail, Text, Button,  Left, Body, Right } from 'native-base';
export default class Showcase extends Component {
  constructor(props) {
    super(props);
 
  }

  
  render() {
 
    return (
      
   
        
          <>
          
           <Content>
           <Image
           
            source={{ uri: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }}
            style={{ width:Dimensions.get('window').width, height: 210 }}
            PlaceholderContent={<ActivityIndicator animating={true}/>}
            />
            <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'center'
            }}>
                <Text style={{color:'white', textAlign:'center',paddingTop:30, width:Dimensions.get('window').width,backgroundColor:'rgba(0,0,0,0.3)',marginTop:-220, fontFamily:'Medium', fontSize:45}}>
                    Spice up your day
                </Text>
            </View>
            <View style={{
                flex:1,
                flexDirection:'row',
                marginTop:-50,
                marginBottom:20,
                justifyContent:'flex-end'
            }}>
                 <Button transparent warning style={{backgroundColor:'transparent'}}>
                    <Text style={{fontFamily:'Medium'}}>Opened from 8:00AM-10:00PM </Text>
                </Button>
            </View>

           </Content>
           
         </>
        
       
       
    
    );
  }
}