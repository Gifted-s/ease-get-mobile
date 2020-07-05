import React, { Component } from 'react';
import {TouchableOpacity, View, Animated} from 'react-native'
import { Container, Header, Content, List, ListItem,Icon, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class Tab1 extends Component {
  constructor(props){
    super(props)
    this.height = new Animated.Value(500)
    
  }
  

  componentDidMount(){
    Animated.timing(this.height,{
      toValue:0,
      duration:500
    }).start()
     
  }
  render() {
    
  //  this.height.interpolate(
  //    {
  //      inputRange: [200,0]
  //    }
  //  )

    return (
      
       
        <Content>
          <Animated.View style={{marginTop:this.height}}>

             <List >
         
             
            <ListItem thumbnail>
            <TouchableOpacity style={{flex:1, flexDirection:'row'}} onPress={()=> this.props.navigation.navigate('Item', {name:'Eba food', price:2000, url:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'})}>
              <Left>
                <Thumbnail square source={{ uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }} />
              </Left>
              <Body>
                <Text style={{fontSize:16,color:'rgba(0,0,0,0.8)', fontFamily:'Medium', textTransform:'uppercase'}}>
                    Hungry man is good for you
                </Text>
                <Text note >Its time to build a </Text>
                <Text style={{marginTop:1}}>₦500</Text>
                  {/* <Button iconLeft warning bordered >
                    <Icon name='md-cart' />
                    <Text>Add</Text>
                </Button> */}
              </Body>
             
            
              </TouchableOpacity> 
            </ListItem>
             

            <ListItem thumbnail>
            <TouchableOpacity style={{flex:1, flexDirection:'row'}} onPress={()=> alert('Added to cart')}>
              <Left>
                <Thumbnail square source={{ uri: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }} />
              </Left>
              <Body>
                <Text style={{fontSize:16,color:'rgba(0,0,0,0.8)', fontFamily:'Medium', textTransform:'uppercase'}}>
                   Chop belefu
                </Text>
                <Text note >Its the best spicy here</Text>
                <Text style={{marginTop:1}}>₦1200</Text>
              </Body>
              {/* <Right>
              <Button iconLeft warning bordered >
                    <Icon name='md-cart' />
                    <Text>Add</Text>
                </Button>
              </Right> */}
              </TouchableOpacity>
            </ListItem>

            <ListItem thumbnail>
            <TouchableOpacity style={{flex:1, flexDirection:'row'}} onPress={()=> alert('Added to cart')}>
              <Left>
                  <Button transparent>

                  </Button>
                <Thumbnail square source={{ uri: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }} />
              </Left>
              <Body>
                <Text style={{fontSize:16, color:'rgba(0,0,0,0.8)',fontFamily:'Medium',textTransform:'uppercase'}}>
                    Small Scale Stomach
                </Text>
                <Text note >Its  satistactory</Text>
                <Text style={{marginTop:1}}>₦5000</Text>
              </Body>
              {/* <Right>
              <Button iconLeft warning bordered >
                    <Icon name='md-cart' />
                    <Text>Add</Text>
                </Button>
              </Right> */}
              </TouchableOpacity>
            </ListItem>

            <ListItem thumbnail>
            <TouchableOpacity style={{flex:1, flexDirection:'row'}} onPress={()=> alert('Added to cart')}>
              <Left>
                <Thumbnail  source={{ uri: 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500' }} />
              </Left>
              <Body>
                <Text style={{fontSize:16, color:'rgba(0,0,0,0.8)',fontFamily:'Medium', textTransform:'uppercase'}}>
                    Basket Mouth
                </Text>
                <Text note >It makes a change </Text>
                <Text style={{marginTop:1}}>₦2500</Text>
              </Body>
              {/* <Right>
              <Button iconLeft warning bordered >
                    <Icon name='md-cart' />
                    <Text>Add</Text>
                </Button>
              </Right> */}
              </TouchableOpacity>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }} />
              </Left>
              <Body>
                <Text style={{fontSize:16, fontWeight:'bold',color:'rgba(0,0,0,0.8)', fontFamily:'Roboto', textTransform:'uppercase'}}>
                    Combo is enough
                </Text>
                <Text note >Its good to taste </Text>
                <Text style={{marginTop:1}}>₦5000</Text>
              </Body>
              {/* <Right>
              <Button iconLeft warning bordered >
                    <Icon name='md-cart' />
                    <Text>Add</Text>
                </Button>
              </Right> */}
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }} />
              </Left>
              <Body>
                <Text style={{fontSize:16, fontWeight:'bold',color:'rgba(0,0,0,0.8)', fontFamily:'Roboto', textTransform:'uppercase'}}>
                    Hungry man
                </Text>
                <Text note >Its time to build a </Text>
                <Text style={{marginTop:1}}>₦500</Text>
              </Body>
              {/* <Right>
              <Button iconLeft warning bordered >
                    <Icon name='md-cart' />
                    <Text>Add</Text>
                </Button>
              </Right> */}
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }} />
              </Left>
              <Body>
                <Text style={{fontSize:16, fontWeight:'bold',color:'rgba(0,0,0,0.8)', fontFamily:'Roboto', textTransform:'uppercase'}}>
                    Hungry man
                </Text>
                <Text note >Its time to build a </Text>
                <Text style={{marginTop:1}}>₦500</Text>
              </Body>
              {/* <Right>
              <Button iconLeft warning bordered >
                    <Icon name='md-cart' />
                    <Text>Add</Text>
                </Button>
              </Right> */}
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }} />
              </Left>
              <Body>
                <Text style={{fontSize:16, fontWeight:'bold',color:'rgba(0,0,0,0.8)', fontFamily:'Roboto', textTransform:'uppercase'}}>
                    Hungry man
                </Text>
                <Text note >Its time to build a </Text>
                <Text style={{marginTop:1}}>₦500</Text>
              </Body>
              {/* <Right>
              <Button iconLeft warning bordered >
                    <Icon name='md-cart' />
                    <Text>Add</Text>
                </Button>
              </Right> */}
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500' }} />
              </Left>
              <Body>
                <Text style={{fontSize:16, fontWeight:'bold',color:'rgba(0,0,0,0.8)', fontFamily:'Roboto', textTransform:'uppercase'}}>
                    Hungry man
                </Text>
                <Text note >Its time to build a </Text>
                <Text style={{marginTop:1}}>₦500</Text>
              </Body>
              {/* <Right>
              <Button iconLeft warning bordered >
                    <Icon name='md-cart' />
                    <Text>Add</Text>
                </Button>
              </Right> */}
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }} />
              </Left>
              <Body>
                <Text style={{fontSize:16, fontWeight:'bold',color:'rgba(0,0,0,0.8)', fontFamily:'Roboto', textTransform:'uppercase'}}>
                    Hungry man
                </Text>
                <Text note >Its time to build a </Text>
                <Text style={{marginTop:1}}>₦500</Text>
              </Body>
              <Right>
              <Button iconLeft warning bordered >
                    <Icon name='md-cart' />
                    <Text>Add</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <View style={{flex:1 , flexDirection:'row', padding:20}}>
          <View style={{flex:1 , flexDirection:'row', height:104,padding:4, borderWidth:3, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}}>
          <View style={{height:90, flex:0.7, backgroundColor:'rgba(0,0,0,0.1)'}} >

          </View>
           <View style={{height:90,  flex:2,borderWidth:2, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}} >

           </View>
      
          </View>
          </View>


          <View style={{flex:1 , flexDirection:'row', padding:20}}>
          <View style={{flex:1 , flexDirection:'row', height:104,padding:4, borderWidth:3, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}}>
          <View style={{height:90, flex:0.7, backgroundColor:'rgba(0,0,0,0.1)'}} >

          </View>
           <View style={{height:90,  flex:2,borderWidth:2, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}} >

           </View>
      
          </View>
          </View>


          <View style={{flex:1 , flexDirection:'row', padding:20}}>
          <View style={{flex:1 , flexDirection:'row', height:104,padding:4, borderWidth:3, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}}>
          <View style={{height:90, flex:0.7, backgroundColor:'rgba(0,0,0,0.1)'}} >

          </View>
           <View style={{height:90,  flex:2,borderWidth:2, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}} >

           </View>
      
          </View>
          </View>


          <View style={{flex:1 , flexDirection:'row', padding:20}}>
          <View style={{flex:1 , flexDirection:'row', height:104,padding:4, borderWidth:3, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}}>
          <View style={{height:90, flex:0.7, backgroundColor:'rgba(0,0,0,0.1)'}} >

          </View>
           <View style={{height:90,  flex:2,borderWidth:2, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}} >

           </View>
      
          </View>
          </View>

          <View style={{flex:1 , flexDirection:'row', padding:20}}>
          <View style={{flex:1 , flexDirection:'row', height:104,padding:4, borderWidth:3, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}}>
          <View style={{height:90, flex:0.7, backgroundColor:'rgba(0,0,0,0.1)'}} >

          </View>
           <View style={{height:90,  flex:2,borderWidth:2, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}} >

           </View>
      
          </View>
          </View>

          <View style={{flex:1 , flexDirection:'row', padding:20}}>
          <View style={{flex:1 , flexDirection:'row', height:104,padding:4, borderWidth:3, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}}>
          <View style={{height:90, flex:0.7, backgroundColor:'rgba(0,0,0,0.1)'}} >

          </View>
           <View style={{height:90,  flex:2,borderWidth:2, borderColor:'rgba(0,0,0,0.1)', borderRadius:3}} >

           </View>
      
          </View>
          </View>
          </Animated.View>
       
        
        </Content>
      
    );
  }
}