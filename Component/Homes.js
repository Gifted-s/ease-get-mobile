import React, { Component } from 'react'

import { ActivityIndicator, View, Image, Linking, TextInput, Alert, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Card, Button, Icon, Picker, Item, Input, Tab, Header, Tabs, ScrollableTab, Title, CardItem, Thumbnail, Text, Left, Body, Right, Badge, Spinner } from 'native-base';

export default class Homes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          apartments:[],
          isLoading:true
        }
      }
      
      componentDidMount(){
          
        fetch(`http://192.168.43.164:3000/egapi/v1/get-apartments`,{
                method:'Get',
                headers:{
                    'Content-type':'application/json'
                }
        
            })
             .then((response)=>response.json())
             .then(resJson=> {
              
               if(resJson.error){
               
                 this.setState({error:resJson.error})
                 this.setState({isError:true})
               }
               else{
                   
                this.setState({apartments: resJson.apartments})
                this.setState({isLoading:false})
               }
             })
             .catch(err=>{
                
              this.setState({error:err.message})
              this.setState({isError:true})
             })
    }
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: "", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Header style={{ backgroundColor: "#20c997", elevation: 0 }} androidStatusBarColor="#20c997">

                    <View style={{ flexDirection: 'row', width: Dimensions.get('window').width }}>


                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, paddingLeft: 20 }}>
                            <TouchableOpacity onPressIn={() => this.props.navigation.navigate("Preload")}><Icon style={{ fontSize: 24, color: 'white' }} name="md-arrow-back" /></TouchableOpacity>
                            <Text style={{ color: "white", fontSize: 27, marginLeft: 40, fontFamily: "Medium" }}>
                                Easy-Get
                          </Text>
                        </View>

                        {/* <TouchableOpacity style={{ position: 'absolute', right: 20, top: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Badge danger style={{ justifyContent: 'center',flexDirection:'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 10, color: 'white' }}>1100</Text>
                                </Badge>
                                <Icon name="md-notifications" style={{ color: 'white' }} />
                            </View>
                        </TouchableOpacity> */}

                    </View>

                </Header>
                <ScrollView style={{ paddingHorizontal: 10 }}>

                    <Text style={{ color: 'rgba(0,0,0,0.7)',marginTop:10,textAlign:'center', fontSize: 17, fontFamily: 'Medium' }}>Select your choice</Text>
                    {
                        !this.state.isLoading ? 

                        this.state.apartments.map((apartment)=>{
                            if(apartment.isAvailable){
                                return (
                                    <TouchableOpacity key={apartment.id} onPress={() => {
                                                                this.props.navigation.navigate("EachHouse", {apartment})
                                                            }}>
                                        
                                        
                                                                <Card style={{ marginTop: 24, elevation: 0 }}>
                                        
                                                                    <CardItem cardBody>
                                                                        <Image source={{ uri: apartment.imageUri }} style={{ height: 200, width: null, flex: 1 }} />
                                                                    </CardItem>
                                                                    <CardItem>
                                        
                                                                        <View>
                                                                            <Text style={{ color: 'rgba(0,0,0,0.9)', fontSize: 25, marginBottom: 10, fontFamily: 'Medium' }}>
                                                                                {apartment.description}
                                                                            </Text>
                                                                            <Text style={{ color: 'rgba(0,0,0,0.8)', fontSize: 16, marginBottom: 10, fontFamily: 'Medium' }}>
                                                                                {apartment.address}
                                                                           </Text>
                                                                            <Text style={{ color: 'rgba(0,0,0,0.7)', fontSize: 14, marginBottom: 10, fontFamily: 'Medium' }}>Price: ₦{apartment.price} | {apartment.priceNegotiable ?'Negotiable':'Not negotiable'} </Text>
                                        
                                                                            <Text style={{ color: 'rgba(0,0,0,0.7)', fontSize: 14, marginBottom: 10, fontFamily: 'Medium' }}>
                                                                                Contact: {apartment.renter.phoneNumber}
                                                                            </Text>
                                                                            <View style={{ flexDirection: 'row' }}>
                                                                                <Button onPress={() => {
                                                                                    this.props.navigation.navigate("EachHouse", {apartment})
                                                                                }} style={{ borderRadius: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: "#20c997" }} block>
                                                                                    <Text>View House Details <Icon name="md-home" style={{ color: 'white', fontSize: 20 }} /></Text>
                                                                                </Button>
                                        
                                                                            </View>
                                        
                                        
                                                                        </View>
                                                                    </CardItem>
                                        
                                                                </Card>
                                                            </TouchableOpacity>
                                                                )
                            }
                            else{
                                return (
                                    null
                                )
                            }
                           
                        })
                        
                        :
                        <View style={{height:300, justifyContent:'center', alignItems:'center'}}>
                            <Spinner />
                        </View>
                    }
                   
                 
                </ScrollView>
            </View>
        )
    }
}
