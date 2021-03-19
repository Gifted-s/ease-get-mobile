import React, { Component } from 'react';
import { ActivityIndicator, View, Alert, TextInput, ScrollView, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Card, Button, Icon, Item, Input, Tab, Header, Tabs, ScrollableTab, Title, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      phoneNumber: '',
      password: '',
      isError: false,
      error: ''

    }
  }

  submit = () => {
    let { password, phoneNumber } = this.state
    if (phoneNumber === "") {
      return Alert.alert('Error', "Please enter your phone number", [{ text: 'Ok', onPress: () => this.setState({ current: 'phone' }) }])
    }
    else if (password === "") {
      return Alert.alert('Error', "Please enter  a password", [{ text: 'Ok', onPress: () => this.setState({ current: 'pass' }) }])
    }
    else {
      AsyncStorage.getItem('token').then(token => {

        fetch("http://192.168.43.164:3000/egapi/v1/signin", {
          method: 'Post',
          headers: {
            'Content-type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify({
            password,
            phoneNumber
          })

        })
          .then((response) => response.json())
          .then(resJson => {
            console.log(resJson)
            if (resJson.error) {
              this.setState({ error: resJson.error })
              this.setState({ isError: true })
            }
            else {
              console.log(resJson)
            this.props.navigation.navigate("Dashboard", {renter:resJson.renter})
            }
          })
          .catch(err => {

            this.setState({ error: err.message })
            this.setState({ isError: true })
          })
      })

    }

  }
  render() {
    if(this.state.isError){
      setTimeout(()=> this.setState({isError:false}), 4000)
    }
    return (

      <View style={{ flex: 1, backgroundColor: "", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    

        <Header style={{ backgroundColor: "transparent", elevation: 0 }} androidStatusBarColor="#20c997" />

        <Text style={{ fontSize: 17, marginBottom: 7, color: 'rgba(0,0,0,0.5)', fontFamily: "Light" }}>
          Welcome
             </Text>
        {
          this.state.isError && <View style={{ paddingHorizontal: 20, marginTop: 6, width: Dimensions.get('window').width }}>
            <View style={{ backgroundColor: "rgba(200,70,50,1)", padding: 10, borderRadius: 3 }}>
              <Text style={{ color: 'white' }}>{this.state.error}</Text>
            </View>
          </View>
        }



        <View style={{ flexDirection: 'column', justifyContent: 'flex-end', paddingHorizontal: 30, paddingVertical: 30, width: Dimensions.get('window').width }}>
          <Text style={{ fontSize: 20, fontFamily: "Medium" }}>
            Sign in
          </Text>
          <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <Text style={{ fontSize: 14, fontFamily: "Light" }}>
              Don't have an account?
          </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} ><Text style={{ color: "skyblue", marginTop: -6, marginLeft: 10 }}>Sign Up</Text></TouchableOpacity>

          </View>
          <Text style={{ fontSize: 16, marginTop: 14, color: '#20c997', fontFamily: "Medium" }}>
            Phone number
           </Text>
          <View style={{ justifyContent: 'flex-start', flexDirection: 'row', width: Dimensions.get('window').width, alignItems: "center" }}>
            <View style={{ backgroundColor: 'green', width: 7, height: 20 }}>

            </View>
            <View style={{ backgroundColor: 'white', width: 7, height: 20 }}>

            </View>
            <View style={{ backgroundColor: 'green', width: 7, height: 20 }}>

            </View>
            <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.7)', marginHorizontal: 6, fontFamily: 'Light' }}>
              +234
            </Text>
            <TextInput onChangeText={(e) => { this.setState({ phoneNumber: e }); this.setState({ isError: false }) }} keyboardType="phone-pad" onFocus={() => this.setState({ current: "phone" })} style={{ borderWidth: 1, flex: 0.75, borderRadius: 5, fontFamily: 'Light', borderColor: this.state.current === "phone" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16 }} placeholder="Enter your phone number" />
          </View>
          <Text style={{ fontSize: 16, marginTop: 14, color: '#20c997', fontFamily: "Medium" }}>
            Password
           </Text>
          <TextInput onChangeText={(e) => { this.setState({ password: e }); this.setState({ isError: false }) }} keyboardType="visible-password" onFocus={() => this.setState({ current: "pass" })} style={{ borderWidth: 1, borderRadius: 5, fontFamily: 'Light', borderColor: this.state.current === "pass" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16 }} placeholder="Enter your password" />


        </View>
        {/* <Text style={{ fontSize: 13,marginTop:14,color: 'rgba(0,0,0,0.6)', fontFamily: "Light" }}>
            By clicking on <Text style={{ fontSize: 13,marginTop:14, color: 'rgba(0,0,0,0.6)', fontFamily: "Medium" }}>Submit</Text> you accept the
           </Text> */}


        <View style={{ width: Dimensions.get('window').width, marginTop: 10, paddingHorizontal: 30 }}>
          <Button onPress={() => this.submit()} style={{ borderRadius: 6, backgroundColor: "#20c997" }} block>
            <Text>Submit</Text>
          </Button>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 50, width: Dimensions.get('window').width }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Forgot")}><Text style={{ fontSize: 13, marginTop: 0, color: '#20c997', fontFamily: "Light" }}> Switch account</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Forgot")}><Text style={{ fontSize: 13, marginTop: 0, color: '#20c997', fontFamily: "Light" }}> Forgot password</Text></TouchableOpacity>

        </View>
      </View>

    );
  }
}