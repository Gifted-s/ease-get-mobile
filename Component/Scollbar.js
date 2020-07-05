import React, { Component } from 'react';
import { ActivityIndicator ,View, Dimensions} from 'react-native';
import * as Font from 'expo-font';
import {SearchBar, Image} from 'react-native-elements'
import HeaderComponent from './Header'
import Tab1 from './Tab1'
import Showcase from './Showcase'
import { Ionicons } from '@expo/vector-icons';
import { Container,  Content, Card, Icon,Item,Input,Tab,Header,TabHeading, Tabs, ScrollableTab , Title, CardItem, Thumbnail, Text, Button,  Left, Body, Right } from 'native-base';
export default class Scrollbar extends Component {
  constructor(props) {
    super(props);
 
  }

  
  render() {
 
    return (
      
    
         <>
        
         
          <Header hasTabs   androidStatusBarColor='#BC7409' style={{height:30,marginTop:-15, backgroundColor:'white'}}>
            <Text style={{color:'rgba(0,0,0,0.6)',position:'absolute', fontSize:14,top:6, paddingVertical:6, fontFamily:'Light' }}>Minimum delivery fee ₦100</Text>
          </Header>
          
          <Tabs   renderTabBar={()=> <ScrollableTab style={{height:50}} underlineStyle={{backgroundColor:'#F9AB52', height:2}} activeTextColor='white'  />}>
          <Tab heading={ 
                <TabHeading style={{ backgroundColor: "#fff" }}>
                            <Text style={{color:'#BC7409',fontSize:15, fontFamily:'Medium'}}>COMBO MENU</Text>
                </TabHeading>}>
             <Tab1 navigation={this.props.navigation}/>       
            </Tab>
            <Tab heading={ 
              <TabHeading style={{ backgroundColor: "#fff" }}>
                    <Text style={{color:'#D17811',fontSize:15, fontFamily:'Medium'}}>MAIN MENU</Text>
                </TabHeading>}>
                <Tab1/> 
            </Tab>
            <Tab heading={ 
              <TabHeading style={{ backgroundColor: "#fff" }}>
                    <Text style={{color:'#D17811',fontSize:15, fontFamily:'Medium'}}>SOUPS</Text>
                </TabHeading>}>
                <Tab1/> 
            </Tab>
            <Tab heading={ 
               <TabHeading style={{ backgroundColor: "#fff" }}>
                    <Text style={{color:'#D17811',fontSize:15, fontFamily:'Medium'}}>SNACKS</Text>
                </TabHeading>}>
                <Tab1/> 
            </Tab>
            <Tab heading={ 
             <TabHeading style={{ backgroundColor: "#fff" }}>
                    <Text style={{color:'#D17811',fontSize:15, fontFamily:'Medium'}}>DRINKS</Text>
                </TabHeading>}>
                <Tab1/> 
            </Tab>
            <Tab heading={ 
                <TabHeading style={{ backgroundColor: "#fff" }}>
                    <Text style={{color:'#D17811',fontSize:15, fontFamily:'Medium'}}>SWALLOWS</Text>
                </TabHeading>}>
                <Tab1/> 
            </Tab>
            <Tab heading={ 
               <TabHeading style={{ backgroundColor: "#fff" }}>
                    <Text style={{color:'#D17811',fontSize:15, fontFamily:'Medium'}}>SIDES AND SALAD</Text>
                </TabHeading>}>
                <Tab1/> 
            </Tab>
        </Tabs>
       
    
       </>
  
    );
  }
}