import React, { Component } from 'react';
import {View, ScrollView} from 'react-native'
import { Container, Header, Content, List, ListItem,Button, Text, Left, Right, Icon, Body, Title } from 'native-base';
export default class Delivery extends Component {
  render() {
    return (
      <Container>
        <Header  androidStatusBarColor='#BC7409'  style={{backgroundColor:'#BC7409'}}>
            <Left>
                <Button transparent onPress={()=> this.props.navigation.navigate("Home")}>
                <Icon name="md-arrow-back" style={{color:'white'}} />
                </Button>
               
            </Left>
            <Body style={{flexDirection:'row', alignItems:"center"}}>
                <Title>
                    Our Delivery Fee
                </Title>
                <View style={{marginLeft:20}}>
                <Icon name="md-bicycle"   style={{color:'white'}}/>
                </View>
              
               
            </Body>
        </Header>
        <Content>
         <ScrollView>
          <List>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Adebayo</Text>
              </Left>
              <Right>
              <Text> ₦4000</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Adeun</Text>
              </Left>
              <Right>
              <Text> ₦4150</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Ajebandele</Text>
              </Left>
              <Right>
              <Text> ₦100</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Iworoko Road</Text>
              </Left>
              <Right>
              <Text> ₦200</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Bashiri</Text>
              </Left>
              <Right>
              <Text> ₦500</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Iyin Road</Text>
              </Left>
              <Right>
              <Text> ₦450</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Federal Housing Afao road</Text>
              </Left>
              <Right>
              <Text> ₦100</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Abe Aba</Text>
              </Left>
              <Right>
              <Text> ₦180</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Ikere Road</Text>
              </Left>
              <Right>
              <Text> ₦500</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Ajilosun</Text>
              </Left>
              <Right>
              <Text> ₦500</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Odo Ado</Text>
              </Left>
              <Right>
              <Text> ₦500</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Ekute Quatars</Text>
              </Left>
              <Right>
              <Text> ₦500</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Ona la</Text>
              </Left>
              <Right>
              <Text> ₦500</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>GRA</Text>
              </Left>
              <Right>
              <Text> ₦500</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Polytechnic, Ikare Road</Text>
              </Left>
              <Right>
              <Text> ₦400</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Oke-ila</Text>
              </Left>
              <Right>
              <Text> ₦400</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Oke-isa</Text>
              </Left>
              <Right>
              <Text> ₦400</Text>
             
              </Right>
            </ListItem>
            <ListItem>
              <Left style={{flexDirection:'row', alignItems:'center', paddingVertical:10}}>
               <Icon name="md-locate" style={{color:'rgba(0,0,0,0.7)'}} />
                <Text style={{fontSize:17, marginLeft:10, color:'rgba(0,0,0,0.9)'}}>Dalimore</Text>
              </Left>
              <Right>
              <Text> ₦400</Text>
             
              </Right>
            </ListItem>
          </List>
          </ScrollView> 
        </Content>

      </Container>
    );
  }
}