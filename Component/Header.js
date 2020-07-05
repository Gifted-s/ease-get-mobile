import React, { Component } from 'react';
import { Image , View} from 'react-native';
import * as Font from 'expo-font';
import {SearchBar} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, Card, Icon,Item,Input,Form,Picker, Title, CardItem, Thumbnail, Text, Button,  Left, Body, Right } from 'native-base';
export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:false
    };
  }

  onValueChange=(value)=>{
   switch (value){
    case 'de' :
    this.props.navigation.navigate('Delivery')
    break;
    case 'se' :
    this.props.navigation.navigate('Service')
    break;
    case 'ab' :
      this.props.navigation.navigate('About')
    break;
    case 'co' :
      this.props.navigation.navigate('Contact')
    break;
   }
  }
  render() {

    const {search} = this.state
    return (
      
     
        
          <>
          {
            this.state.search === true?
            <Header searchBar rounded androidStatusBarColor='#BC7409'  style={{backgroundColor:'#BC7409'}}>
            <Item>
              <Icon name="md-search" />
              <Input autoFocus placeholder="Search for food" />
              <Button onPress={()=>this.setState({search:false})}  transparent>
              <Icon name="md-close" />
              </Button>
            
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
             :
             <Header searchBar ro androidStatusBarColor='#BC7409'  style={{backgroundColor:'#BC7409'}}>
             <Left>
             <Form>
        
              
              <Icon name='md-menu' style={{color:'white'}} />
              
           
            <Picker
              mode="dropdown"
              style={{ width: 60, height:60, backgroundColor:'green',marginLeft:-9, opacity:0, position:'absolute'}}
              itemStyle={{backgroundColor:'red'}}
              onValueChange={this.onValueChange.bind(this)}
            > 
              <Picker.Item label="Main Menu" value="ma" />
              <Picker.Item label="View our delivery fees" value="de" />
              <Picker.Item label="Our Services" value="se" />
              <Picker.Item label="About Perfect Treats" value="ab" />
              <Picker.Item label="Contact Us" value="co" />
              <Picker.Item label="Report a problem to our agent" value="re" />
              
            </Picker>
            
          </Form>
             </Left>
             <Body>
             
               <Title >Perfect Treats</Title>
              </Body>
             <Right>
                <Button onPress={()=> {this.setState({search:true})
                console.log('clicked')
               }} transparent>
                 <Icon name='search'  />
               </Button>
               {/* <Button transparent>
                 <Icon name='more' />
               </Button> */}
        
             </Right>
           </Header> 
          }
         
         
       
         
        </>
        
       
      
    );
  }
}