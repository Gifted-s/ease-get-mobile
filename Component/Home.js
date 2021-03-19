import React, { Component } from 'react';
import { ActivityIndicator, View, TextInput,Alert, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Card, Button, Icon, Item, Input, Tab, Header, Tabs, ScrollableTab, Title, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      firstname:'',
      secondname:'',
      phone:'',
      isError:false,
      error:"message",
      pass1:'',
      pass2:''
    }
  }

  handleSubmit = function(){
    let {firstname, secondname, phone,pass1, pass2} = this.state
    if(firstname===""){
      Alert.alert('Error', "Please enter your first name", [{text:'Ok', onPress:()=>this.setState({current:'first'})}])
    }
  else  if(secondname===""){
      Alert.alert('Error', "Please enter your last name", [{text:'Ok', onPress:()=>this.setState({current:'second'})}])
    }
   else if(phone===""){
      Alert.alert('Error', "Please enter your phone number", [{text:'Ok', onPress:()=>this.setState({current:'phone'})}])
    }
    else if(pass1===""){
      Alert.alert('Error', "Please enter  a password", [{text:'Ok', onPress:()=>this.setState({current:'pass'})}])
    }
    else if(pass2===""){
      Alert.alert('Error', "Please retype your password", [{text:'Ok', onPress:()=>this.setState({current:'pass2'})}])
    }
    else if(pass1 !== pass2){
      Alert.alert('Error', "Password does not match retype your passwords please", [{text:'Ok', onPress:()=>this.setState({current:'pass'})}])
    }
    else{
    
       fetch("http://192.168.43.164:3000/egapi/v1/signup",{
        method:'Post',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({
         firstName:firstname,
         lastName:secondname,
         password:pass1,
         phoneNumber:phone
        })

    })
     .then((response)=>response.json())
     .then(resJson=> {
       console.log(resJson)
       if(resJson.error){
         this.setState({error:resJson.error})
         this.setState({isError:true})
       }
       else{
          console.log(resJson)
          this.props.navigation.navigate("OTP", {number:this.state.phone, name:this.state.secondname, id:resJson.renterId})
       }
     })
     .catch(err=>{
       
      this.setState({error:err.message})
      this.setState({isError:true})
     })
    }
    
  }
  render() {
    return (
    
      <View style={{ flex: 1, backgroundColor: "", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {
          this.state.isError && <View style={{paddingHorizontal:20,marginTop:6, width:Dimensions.get('window').width}}>
             <View style={{backgroundColor:"rgba(200,70,50,1)",padding:10,borderRadius:3}}>
              <Text style={{color:'white'}}>{this.state.error}</Text>
             </View>
          </View>
        }
       
        <ScrollView>

        
        <Header style={{backgroundColor:"transparent", elevation:0}} androidStatusBarColor="#20c997"/>
       
          <Text style={{ fontSize: 17, margin: -13, color: 'rgba(0,0,0,0.5)', fontFamily: "Light" }}>
            
          </Text>
    
        


        <View style={{ flexDirection: 'column', justifyContent: 'flex-end', paddingHorizontal: 30, paddingVertical: 30, width: Dimensions.get('window').width }}>
        
        <Text style={{ fontSize: 20,marginTop:-50, fontFamily: "Medium" }}>
            Sign up to have an account
          </Text>
          <View style={{flexDirection:"row", alignItems:'center'}}>
          <Text style={{ fontSize: 14, fontFamily: "Light" }}>
            Already have an account? 
          </Text>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignIn')} ><Text style={{color:"skyblue",marginTop:-6, marginLeft:10}}>Sign in</Text></TouchableOpacity>

          </View>
        
          <Text style={{ fontSize: 16,marginTop:14, color: '#20c997', fontFamily: "Medium" }}>
            First Name
           </Text>
          <TextInput onChangeText={(value)=>{this.setState({firstname:value}); this.setState({isError:false})}} keyboardType="default" onFocus={() => this.setState({ current: "first" })} style={{ borderWidth: 1, borderRadius: 5,fontFamily:'Light', borderColor: this.state.current === "first" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16 }} placeholder="Enter your first name" />

          <Text style={{ fontSize: 16,marginTop:14, color: '#20c997', fontFamily: "Medium" }}>
            Last Name
           </Text>
          <TextInput onChangeText={(value)=>{this.setState({isError:false}); this.setState({secondname:value})}} keyboardType="default" onFocus={() => this.setState({ current: "second" })} style={{ borderWidth: 1, borderRadius: 5,fontFamily:'Light', borderColor: this.state.current === "second" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16 }} placeholder="Enter your last name" />

          <Text style={{ fontSize: 16,marginTop:14, color: '#20c997', fontFamily: "Medium" }}>
            Phone number
           </Text>
           <View style={{justifyContent:'flex-start', flexDirection:'row',width:Dimensions.get('window').width, alignItems:"center"}}>
           <View style={{backgroundColor:'green', width:7, height:20}}>

            </View>
            <View style={{backgroundColor:'white', width:7, height:20}}>

            </View>
            <View style={{backgroundColor:'green', width:7, height:20}}>

            </View>
            <Text style={{fontSize:16, color:'rgba(0,0,0,0.7)', marginHorizontal:6, fontFamily:'Light'}}>
              +234
            </Text>
            <TextInput onChangeText={(value)=>{this.setState({isError:false}); this.setState({phone:value})}} keyboardType="phone-pad" onFocus={() => this.setState({ current: "phone" })} style={{ borderWidth: 1,flex:0.75, borderRadius: 5,fontFamily:'Light', borderColor: this.state.current === "phone" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16 }} placeholder="Enter your phone number" />
           </View>
        
           <Text style={{ fontSize: 16,marginTop:14, color: '#20c997', fontFamily: "Medium" }}>
            Create Password
           </Text>
          <TextInput onChangeText={(value)=>{this.setState({isError:false});this.setState({pass1:value})}} keyboardType="visible-password" onFocus={() => this.setState({ current: "pass" })} style={{ borderWidth: 1, borderRadius: 5,fontFamily:'Light', borderColor: this.state.current === "pass" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16 }} placeholder="Enter your password" />


          <Text style={{ fontSize: 16,marginTop:14, color: '#20c997', fontFamily: "Medium" }}>
            Retype Password
           </Text>
          <TextInput onChangeText={(value)=>{this.setState({isError:false});this.setState({pass2:value})}} keyboardType="visible-password" onFocus={() => this.setState({ current: "pass2" })} style={{ borderWidth: 1, borderRadius: 5,fontFamily:'Light', borderColor: this.state.current === "pass2" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16 }} placeholder="Retype your password" />
          <Text style={{ fontSize: 13,marginTop:14,textAlign:'center', color: 'rgba(0,0,0,0.6)', fontFamily: "Light" }}>
            By clicking on <Text style={{ fontSize: 13,marginTop:14, color: 'rgba(0,0,0,0.6)', fontFamily: "Medium" }}>Submit</Text> you accept the
           </Text>
           <TouchableOpacity><Text style={{ fontSize: 13,marginTop:0,textAlign:'center', color: '#20c997', fontFamily: "Light" }}> Terms and conditions</Text></TouchableOpacity>
        </View>
        <View>
          
        </View>
       

        <View style={{width:Dimensions.get('window').width, paddingHorizontal:30}}>
          <Button onPress={()=> this.handleSubmit()} style={{borderRadius:6,backgroundColor:"#20c997"}}  block>
             <Text>Submit</Text>
          </Button>
        </View>
        </ScrollView>
      </View>

    );
  }
}