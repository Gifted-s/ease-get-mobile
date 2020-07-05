import React, { Component, useState ,useEffect} from 'react';
import { Image , View,Dimensions, TouchableHighlight,  Alert,
    Modal,
    StyleSheet,
    
    } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import * as Font from 'expo-font';
import {SearchBar} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Content, Card, Icon,Picker,DeckSwiper, Item,SwipeRow, Input,Form, Title, CardItem, Thumbnail, Text, Button,  Left, Body, Right, Badge } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Service =(props)=> {
    useEffect(()=>{
         setModalVisible(true)
    }, [modalVisible])
    const [modalVisible, setModalVisible] = useState(false);
    const cards = [
        {
          text: 'We serve food and drinks to customers',
          name: 'African meal, fast food and drinks',
          description:`We provide you the best meals at affordable prices, also we provide snacks, drinks for your consumption `,
          image: {uri:'https://i.pinimg.com/originals/93/56/a8/9356a871c4fc88745242fff8d8af939c.jpg'}
        },
        {
            text: 'Catering services',
            name: `We provide indoor and outdoor catering service`,
            description:'Preparation of quality dishes for your personal/family consumption and your parties. The meals we prepare are mostly African dishes,Snacks, Continental dishes or any other menu to be determined by the host.',
            image: {uri:'https://mexicofoodfair.com/wp-content/uploads/2019/03/Catering.jpg'},
          },
          {
            text: 'Professional catering Consultancy',
            name: 'seek information or advice from  us on catering ',
            description:'As a foodservice consultant, we work as an advocate for client in achieving their goals through the design and implementation of foodservice facilities and/or operations/management systems.',
            image: {uri:'https://www.omenkaonline.com/wp-content/uploads/2017/06/iquo-ukoh.png'},
          },
          {
            text: 'Food delivery',
            name: 'Get your food deliverd to you at anywhere in Ado Ekiti',
            description:'We offer office and home delivery of food, snacks and drinks. Our online shop is open from 8:00 AM to 10:00PM for you to place orders and give directions for delivery. Our Service are prompt and reliable.',
            image: {uri:'https://www.consumerhalla.ng/cloud/hallalive//CustomerImages/1575282432441Food-Delivery.jpeg'},
          },
          {
            text: 'Takeaway service',
            name: 'You can get your food packaged for you to eat else where ',
            description:'We help you package your food in a portable form for consumption anywhere.',
            image: {uri:'https://image.shutterstock.com/image-photo/foam-plastic-containers-delicious-food-260nw-1073064824.jpg'},
          }
      ];
    return (
      <Container style={{backgroundColor:'#efefef'}}>


<View style={styles.centeredView}>
      <Modal
        statusBarTranslucent={true}
        animationType="slide"
        transparent={true}
        visible={modalVisible}

      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize:14, textAlign:'center', fontFamily:'Light'}}>Swipe right or left to navigate between services</Text>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNqsDf2ywOU9t52NbzISTQPIxFT5XTc89IyL5D35Keg1FoSXTG&usqp=CAU'}} style={{width:120, height:120}}/>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#BC7409" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Proceed</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>





           
           <Header  androidStatusBarColor='#BC7409'  style={{backgroundColor:'#BC7409'}}>
            <Left>
                <Button transparent onPress={()=> props.navigation.navigate("Home")}>
                <Icon name="md-arrow-back" style={{color:'white'}} />
                </Button>
               
            </Left>
            <Body style={{flexDirection:'row', alignItems:"center"}}>
                <Title>
                    OUR SERVICES
                   
                </Title>
                <View style={{marginLeft:20}}>
                <Icon name="md-restaurant"   style={{color:'white'}}/>
                </View>
                {/* md-restaurant */}
               
            </Body>
        </Header>
        <Content scrollEnabled >
            <View style={{flex:1}} >
            <View style={{height:700,borderBottomRightRadius:320, width:Dimensions.get('window').width, backgroundColor:'#BC7409'}}> 
            <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card key={item.name} style={{ elevation: 3, borderColor:'transparent' }}>
                <CardItem>
                  <Left>
                    {/* <Thumbnail source={item.image} /> */}
                    <Body style={{padding:20}}>
                      <Text style={{fontSize:27, marginLeft:-14, fontFamily:'Medium'}}>{item.text}</Text>
                    <Text style={{marginLeft:-14,}} note>{item.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem style={{backgroundColor:"#BC7409"}}>
                  {/* <Icon name="heart" style={{ color: '#ED4A6A' }} /> */}
                  <Text style={{fontFamily:'Light',fontSize:15, marginLeft:-6, color:'white'}}>{item.description}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>






            </View>
        </Content>
      </Container>
    );
  }




  const styles = StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0
    },
    modalView: {
      marginTop: 40,
      backgroundColor: "white",
      borderRadius: 12,
      padding: 90,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 10,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
export default Service