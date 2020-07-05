import React, { Component } from 'react';
import { Image , View,Dimensions, TouchableHighlight} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import * as Font from 'expo-font';
import {SearchBar} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, Card, Icon,Picker, Item,SwipeRow, Input,Form, Title, CardItem, Thumbnail, Text, Button,  Left, Body, Right, Badge } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:false,
      data:[],
      selected:''
    };
  }

   componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json()).then((data)=> this.setState({data}))
  }

  onValueChange=(value)=>{
      this.setState({selected:value})
    console.log('value')
  }

  render() { 
      const data=[
          {
              id:1,
              name:'Jollof rice',
              number:3,
              price:3000,
              note:'Its really nice'
          },
          {
            id:2,
            name:'Banana flavour',
            number:3,
            price:1000,
            note:'Gives you the best taste especially with garlkic'
        },
        {
            id:3,
            name:'Amala palace',
            price:2500,
            number:3,
            note:'Its really nice and peprish infact well serverd'
        },
        {
            id:4,
            name:'Rodo meat and pepper',
            price:2500,
            number:3,
            note:'Good for muscle devlopment and nasal growth for children'
        },
        
      ]
 
    return (
      <Container style={{backgroundColor:'#efefef'}}>
                   <Header  androidStatusBarColor='#BC7409'  style={{backgroundColor:'#BC7409'}}>
            <Left>
                <Button transparent onPress={()=> this.props.navigation.navigate("Home")}>
                <Icon name="md-arrow-back" style={{color:'white'}} />
                </Button>
               
            </Left>
            <Body style={{flexDirection:'row', alignItems:"center"}}>
                <Title>
                    ITEMS IN BAG
                   
                </Title>
                <View style={{marginLeft:20}}>
                <Icon name="md-basket"   style={{color:'white'}}/>
                </View>
              
               
            </Body>
        </Header>
           <Content scrollEnabled>

         
          <SwipeListView
            style={{marginTop:7}}
             data={data}
             keyExtractor={(item ,index)=> item.name}
             renderItem={({item, index, separators}) => (
             <View >
             <Card style={{marginTop:-2, borderTopColor:'transparent', borderBottomColor:'transparent', elevation:0}}>
             <CardItem style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} >
              
             <Badge warning style={{textTransform:'lowercase',height:20,top:-2, justifyContent:'center'}}><Text style={{fontSize:12}}>{item.number}</Text></Badge>
             <Text style={{fontSize:14,fontFamily:'Medium', textTransform:'uppercase'}}>{item.name}</Text>
             <Text style={{fontSize:13, fontFamily:'Roboto',color:'rgba(0,0,0,0.8)', textTransform:'uppercase'}}>₦{item.price}</Text>            
              </CardItem>  
           </Card>
           <Card style={{paddingVertical:0, marginTop:-19}}>
            <CardItem style={{paddingVertical:0, marginTop:-4}}>
             <Text note  style={{color:'rgba(0,0,0,0.7)', fontFamily:'Light'}}>{item.note}</Text>
             </CardItem>
            </Card>
            </View>
          
             )}
             renderHiddenItem={ (data, rowMap) => (
                    <Button danger style={{position:'absolute', right:4, width:70,top:10, justifyContent:'center'}}>
                      <Icon name='trash' />
                    </Button>
                   
               
            )}
            leftOpenValue={0}
            rightOpenValue={-75}
        />

        <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginVertical:17}}>
            <>
            <Icon name="add" style={{marginLeft:30, color:'#BC8409'}}/>
            <Text style={{marginLeft:20 ,fontWeight:'600', color:'#BC8409'}}>
                Add Products
            </Text>
            </>
        </TouchableOpacity>


        <Form style={{flexDirection:'row', alignItems:'center',borderBottomColor:'rgba(0,0,0,0.3)', borderBottomWidth:1}}>
        <Text style={{marginLeft:20 ,fontWeight:'600', color:'#BC8409'}}>Select your street <Icon name="md-arrow-forward" style={{fontSize:20,marginTop:30, color:'rgba(0,0,0,0.4)'}}/></Text>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120, marginLeft:20}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Adebayo" value="key0" />
              <Picker.Item label="Basiri" value="key1" />
              <Picker.Item label="Ajebandele" value="key2" />
              <Picker.Item label="Abe aba" value="key3" />
              <Picker.Item label="Federal Housing Estate" value="key4" />
              <Picker.Item label="Ajilosun" value="key5" />
            </Picker>
          </Form>





        <View style={{flexDirection:'row',paddingHorizontal:20, alignItems:'center',justifyContent:'space-between', marginVertical:10}}>
            <Text style={{fontSize:14, fontWeight:'500', color:'rgba(0,0,0,0.6)'}}>
                Subtotal
            </Text>
            <Text style={{fontSize:14, fontWeight:'500', color:'rgba(0,0,0,0.6)'}}>
              ₦1500
            </Text>
        </View>
        <View style={{flexDirection:'row',paddingHorizontal:20, alignItems:'center',justifyContent:'space-between', marginVertical:0}}>
            <Text style={{fontSize:14, fontWeight:'500', color:'rgba(0,0,0,0.6)'}}>
                Delivery Fee
            </Text>
            <Text style={{fontSize:14, fontWeight:'500', color:'rgba(0,0,0,0.6)'}}>
              ₦200
            </Text>
        </View>
        <View style={{flexDirection:'row',paddingHorizontal:20, alignItems:'center',justifyContent:'space-between', marginVertical:20}}>
            <Text style={{fontSize:16, fontWeight:'500', color:'rgba(0,0,0,1)'}}>
                Total
            </Text>
            <Text style={{fontSize:16, fontWeight:'500', color:'rgba(0,0,0,1)'}}>
              ₦7500
            </Text>
        </View>

       
                  {/* <Header  androidStatusBarColor='#BC7409'  style={{backgroundColor:'#BC7409'}}>
            <Left>
                <Button transparent onPress={()=> this.props.navigation.navigate("Home")}>
                <Icon name="md-arrow-back" style={{color:'white'}} />
                </Button>
               
            </Left>
            <Body style={{flexDirection:'row', alignItems:"center"}}>
                <Title>
                    ITEMS IN BAG
                   
                </Title>
                <View style={{marginLeft:20}}>
                <Icon name="md-basket"   style={{color:'white'}}/>
                </View>
              
               
            </Body>
        </Header>
          <Content>
              <>
             <Card>
             <CardItem style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} >
              <Text style={{fontSize:15,fontFamily:'Medium', textTransform:'uppercase'}}><Text style={{textTransform:'lowercase',fontSize:14}}>4x</Text> Efo Riro And Amala</Text>
              <Text style={{fontSize:13, fontFamily:'Roboto',color:'rgba(0,0,0,0.8)', textTransform:'uppercase'}}>₦4000</Text>            
              </CardItem>  
           </Card>

           <Card style={{paddingVertical:0, marginTop:-19}}>
            <CardItem style={{paddingVertical:0, marginTop:-7}}>
              <Text note  style={{color:'rgba(0,0,0,0.7)', fontFamily:'Light'}}>We give you this as hot as posible and we delever it as fast as possible trust me</Text>
             </CardItem>
             <Button transparent iconRight bordered style={{width:100, height:30, marginBottom:3}}>
             <Text style={{fontSize:12}}>Delete</Text>    
             <Icon name="md-trash" style={{fontSize:20}}/>
             </Button>
             
           </Card>

           <Card>
             <CardItem style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} >
              <Text style={{fontSize:15,fontFamily:'Medium', textTransform:'uppercase'}}><Text style={{textTransform:'lowercase',fontSize:14}}>4x</Text> Semo and Gbegiri</Text>
              <Text style={{fontSize:13, fontFamily:'Roboto',color:'rgba(0,0,0,0.8)', textTransform:'uppercase'}}>₦5100</Text>            
              </CardItem>  
           </Card>

           <Card style={{paddingVertical:0, marginTop:-19}}>
            <CardItem style={{paddingVertical:0, marginTop:-7}}>
              <Text note  style={{color:'rgba(0,0,0,0.7)', fontFamily:'Light'}}>Best in town for your consumption</Text>
             </CardItem>
           </Card>

           </>

          </Content> */}
          </Content>
          
        <View style={{paddingHorizontal:10,width:Dimensions.get('window').width, paddingVertical:16,backgroundColor:'white',position:'absolute', height:90,bottom:0}}>
             <Button style={{height:56,justifyContent:'center',marginBottom:-30, alignItems:'center'}} success  onPress={()=> this.props.navigation.navigate('Order')}>
               
                <Text style={{fontSize:15, textAlign:'center'}}>PROCEED TO CHECKOUT</Text>
               
              </Button>
        </View>
      </Container>
    );
  }
}