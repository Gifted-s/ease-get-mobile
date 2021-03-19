import React, { Component } from 'react'
import { ActivityIndicator,AsyncStorage, View, TextInput, ScrollView, Dimensions } from 'react-native';
import { Container, Content, Card, Button, Icon, Item, Input, Tab, Header, Tabs, ScrollableTab, Title, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class OTP extends Component {

    constructor(props) {
        super(props)
        this.state = {
            code: '',
            current: '',
            isError:false,
            error:''
        }
    }
    // this.props.navigation.navigate('Dashboard')
    checkOTP= function(){
        if(this.state.code===""){
            return Alert.alert('Error', " enter OTP code", [{text:'Ok', onPress:()=>this.setState({current:'phone'})}])
        }
        else{
            fetch(`http://192.168.43.164:3000/egapi/v1/validate-token/${this.props.route.params.id}`,{
                method:'Post',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify({
                OTP: this.state.code
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
                  console.log(resJson, "test me tere")
                  AsyncStorage.setItem('token', resJson.token)
                  this.props.navigation.navigate("Dashboard", {renter:resJson.renter})
                
                
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
                <Header style={{ backgroundColor: "transparent", elevation: 0 }} androidStatusBarColor="#20c997" />

                <Text style={{ fontSize: 17, margin: -13, color: 'rgba(0,0,0,0.8)', fontFamily: "Light" }}>
                    Just a second {this.props.route.params.name} !!!
                </Text>




                <View style={{ flexDirection: 'column', justifyContent: 'flex-end', paddingHorizontal: 30, paddingVertical: 30, width: Dimensions.get('window').width }}>
                    <Text style={{ fontSize: 20, fontFamily: "Medium" }}>
                        {this.props.route.params.number}  will recieve a 4 digit Pin Code, type it here and press continue
              </Text>
                   

                    <Text style={{ fontSize: 16, marginTop: 14, color: '#20c997', fontFamily: "Medium" }}>
                        Enter Pin
               </Text>
                    <TextInput autoFocus onChangeText={(value) => {this.setState({ code: value }); this.setState({isError:false})}} keyboardType="phone-pad" onFocus={() => this.setState({ current: "first" })} style={{ borderWidth: 1, borderRadius: 5, fontFamily: 'Light', borderColor: this.state.current === "first" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16 }} placeholder="Enter  code" />
                     
                </View>
                <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 30 }}>
                    <Button  onPress={() => {this.checkOTP()}} style={{ borderRadius: 6, backgroundColor: "#20c997" }} block>
                        <Text>Continue</Text>
                    </Button>
                </View>


                <View style={{ flexDirection: "row",marginTop:60, alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: "Light" }}>
                            Didn't get a code?
                </Text>
                        <TouchableOpacity ><Text style={{ color: "skyblue", marginTop: -6, marginLeft: 10 }}>Resend</Text></TouchableOpacity>

                    </View>
            </View>
        )
    }
}

export default OTP
