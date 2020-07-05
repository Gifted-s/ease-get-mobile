import React, { Component } from 'react';
import { ActivityIndicator,ImageBackground ,TouchableOpacity, View, Dimensions, Alert} from 'react-native';
import * as Font from 'expo-font';
import {SearchBar, Image} from 'react-native-elements'

import { Ionicons } from '@expo/vector-icons';
import { Container,  Content, Card, Icon,Item,Input,Header, Title, CardItem, Thumbnail, Text, Button,  Left, Body, Right } from 'native-base';
export default class About extends Component {
  constructor(props) {
    super(props);
 
  }

  
  render() {
 
    return (
      
   
        
          <>
        <ImageBackground style={{flex:1}} source={{uri:'https://scontent.fabv2-1.fna.fbcdn.net/v/t1.0-9/91049543_2889260171116854_2939017602069954560_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_eui2=AeFOIwePDqcVJn3tkzLkGXqYKedhMxLHSnsp52EzEsdKe-Z98sxalh71dgiII9U9YspsBzqH0NXS6E5XQJ2LVJEh&_nc_ohc=M_jtJA8Rh3IAX8mnZwk&_nc_ht=scontent.fabv2-1.fna&oh=465c81aaa07977b965e4d71cac4322fa&oe=5EFBAF0D'}}>
        <Button transparent onPress={()=> this.props.navigation.navigate("Home")}>
                <Icon name="md-arrow-back" style={{color:'white'}} />
        </Button>
        <Content>
             <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                 <Icon name="md-restaurant" style={{fontSize:120, color:'white'}}/>
                 <View>
                     <Text style={{color:'white', fontFamily:'Medium',fontWeight:'bold', fontSize:40}}>Perfect Treats</Text>
                 </View>
                 <View style={{paddingHorizontal:30}}>
                     <Text style={{color:'white', fontFamily:'Light', fontSize:12, textAlign:'center'}}>Copyright 2020 Perfect Treats. All rights reserved</Text>
                 </View>
                 <View style={{paddingHorizontal:20, marginTop:70}}>
                     <Text style={{color:'white', fontFamily:'Light', fontSize:15, textAlign:'center'}}>
                     Perfect Treats is a fast food company that is into continental dishes, pasteries, bakery and African dishes. It also embarks on event management, catering services (indoor and outdoor) and also offers professional consultancy service on catering.
                     </Text>
                 </View>


                 <TouchableOpacity onPress={()=>Alert.alert("Terms and Policy", "We provide and ensure a quality services. We also try our best to maintain our standard. How ever any form of fraud or criminal act will not be tolerated")} style={{paddingHorizontal:20, marginTop:70}}>
                     <Text style={{color:'white', fontFamily:'Light', fontSize:15, textAlign:'center'}}>
                       View terms and Policy
                     </Text>
                 </TouchableOpacity>
             </View>
           </Content>
       </ImageBackground>

           
         </>
    );
  }
}