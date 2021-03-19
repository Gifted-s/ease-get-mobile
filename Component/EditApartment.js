import React, { Component } from 'react'
import { ActivityIndicator, Image, StyleSheet, View, TextInput, ScrollView, Dimensions, Alert } from 'react-native';
import { Container, Content, Card, Button, Icon, Item, Input, Tab, Picker, Header, Tabs, ScrollableTab, Title, CardItem, Thumbnail, Text, Left, Body, Right, Textarea, CheckBox, Spinner } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import * as FileSystem from 'expo-file-system'
// import firebase from 'firebase';
// import * as ExpoDocumentPicker from 'expo-document-picker'
export default class EditApartment extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      error: '',
      isError: false,
      description: '',
      price: 0,
      renter: {
        apartments: []
      },
      isLoading: false,
      negotiable1: false,
      negotiable2: false,
      address: '',
      isUploading: false,
      imageUri: [],
      progress: 0
    }
  }

  componentDidMount() {
   const {
    description,
    price,
    priceNegotiable,
    address,
    renterId,
    imageUrls,
    isAvailable
   }
   = this.props.route.params.apartment
   this.setState({description,price,negotiable1: priceNegotiable?true:false, address,imageUri:imageUrls})
  }
  
  onValueChange = function (value) {
    alert('hello')
    if (value === 'logout') {
      this.props.navigation.navigate('SignIn')
    }
  }
  onPressUpload = async () => {

    const message = await ExpoDocumentPicker.getDocumentAsync()
    if (message.type !== "cancel") {
      setTimeout(() => this.setState({ isUploading: true }), 2000)
      await uploadFile(message).then(() => {
        //  console.log('upload done')

      })
        .catch(err => {
          console.log("thats it")
        })

    }

  }

  async uploadFile(message) {
    const response = await fetch(message.uri)
    const blob = await response.blob()

    const uploadTask = firebase.storage().ref().child("images/" + message.name).put(blob)
    uploadTask.on('state_changed', (snapshot) => {
      const pr = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({ progress: pr })
    }, function (err) {
      console.log(err)
    }, function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        let uploadUris = this.state.imageUri
        uploadUris = [...uploadUris, downloadURL]
        this.setState({ imageUri: uploadUris })
        this.setState({ isUploading: false })
      })
    }

    )

  }



  handleEdit = function () {
    const {description, address, price, negotiable2, negotiable1} = this.state
    if (!description) {
      Alert.alert('Please enter a description and make sure its not less than 10 characters')
    }
    else if (description.length < 10) {
      Alert.alert('Please make sure description is not less than 10 characters')
    }
    else if (!address) {
      Alert.alert('Please enter the address and make sure it is well stated')
    }
    else if (!price) {
      Alert.alert('Please enter the price')
    }
    else if (!negotiable1 && !negotiable2) {
      Alert.alert('Please check if price is negotiable or not')
    }
    else {
      this.setState({ isLoading: true })
      fetch(`http://192.168.43.164:3000/egapi/v1/edit-apartment/${this.props.route.params.apartment.id}`, {
        method: 'Post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          _id:this.props.route.params.apartment._id,
          description: this.state.description,
          price:parseInt(this.state.price),
          priceNegotiable: this.state.negotiable1 ? true : false,
          address: this.state.address,
          renterId: this.state.renter.id,
          imageUrls: this.state.imageUri,
          isAvailable: true,
        })

      })
        .then((response) => response.json())
        .then(resJson => {
          if (resJson.error) {
            this.setState({ isLoading: false })
            this.setState({ error: resJson.error })
            this.setState({ isError: true })
          }
          else {
            this.setState({ isLoading: false })
            Alert.alert(`Apartment updated successfully`)
            this.props.route.params.reload()
            this.props.navigation.navigate('Dashboard')
            
            
          }
        })
        .catch(err => {
          this.setState({ isLoading: false })
          this.setState({ error: err.message })
          this.setState({ isError: true })
        })
    }

  }
  render() {

    return (
      <View style={{ flex: 1, backgroundColor: "", flexDirection: 'column' }}>
        <Header style={{ backgroundColor: "#20c997", elevation: 0}} androidStatusBarColor="#20c997">
          <View style={{ flexDirection: 'row', position:'absolute', left:14, top:10 }}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Dashboard')} style={{marginRight:20}}>
              <Icon style={{ fontSize: 20, color: 'white' }} name="md-arrow-back" />
              </TouchableOpacity>
              <Text style={{ fontSize: 15,color:'white', fontFamily: "Medium" }}>Edit apartment</Text>


            
          </View>
        </Header>
        {
          this.state.isError && <View style={{ paddingHorizontal: 20, marginTop: 6, width: Dimensions.get('window').width }}>
            <View style={{ backgroundColor: "rgba(200,70,50,1)", padding: 10, borderRadius: 3 }}>
              <Text style={{ color: 'white' }}>{this.state.error}</Text>
            </View>
          </View>
        }

      <Content style={{ paddingHorizontal: 20 }}>
            {
              this.state.isLoading && <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
                <Spinner />
              </View>
            }
            <Text style={{ fontSize: 14,backgroundColor:'rgba(0,0,0,0.17)',padding:6, marginTop: 10, color: 'rgba(0,0,0,0.7)', fontFamily: "Medium" }}>
             HOUSE ID : {this.props.route.params.apartment.id}
            </Text>

            <Text style={{ fontSize: 16, marginTop: 30, color: '#20c997', fontFamily: "Medium" }}>
              Describe this place
                   </Text>
            <Textarea  value={this.state.description} placeholderTextColor="rgba(0,0,0,0.3)" onChangeText={(value) => this.setState({ description: value })} keyboardType="default" onFocus={() => this.setState({ current: "first" })} style={{ borderWidth: 1, borderRadius: 5, fontFamily: 'Light', borderColor: this.state.current === "first" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, height: 110, paddingVertical: 10, fontSize: 16 }} placeholder="Describe this place e.g A room in a flat to let. Well tiled and there is provision of running water, electricity and security" />

            <Text style={{ fontSize: 16, marginTop: 10, color: '#20c997', fontFamily: "Medium" }}>
              Enter address
                   </Text>
            <Textarea value={this.state.address} placeholderTextColor="rgba(0,0,0,0.3)" onChangeText={(value) => this.setState({ address: value })} keyboardType="default" onFocus={() => this.setState({ current: "second" })} style={{ borderWidth: 1, borderRadius: 5, height: 90, fontFamily: 'Light', borderColor: this.state.current === "second" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16 }} placeholder="Enter the address of this place" />
            <Text style={{ fontSize: 16, marginTop: 10, color: '#20c997', fontFamily: "Medium" }}>
              Enter Price
                   </Text>
            <TextInput value={this.state.price.toString()} onChangeText={(value) => this.setState({ price: value })} keyboardType="phone-pad" onFocus={() => this.setState({ current: "price" })} style={{ borderWidth: 1, borderRadius: 5, fontFamily: 'Light', borderColor: this.state.current === "price" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.04)', marginTop: 6, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16 }} placeholder="Enter price in Naira" />
            <Text style={{ fontSize: 16, marginTop: 10, color: '#20c997', fontFamily: "Medium" }}>
              Can you negotiate the price?
                   </Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>

                <Text style={{ fontSize: 15, fontFamily: "Medium" }}> YES</Text><CheckBox onPressIn={() => { this.setState({ negotiable1: true }); this.setState({ negotiable2: false }) }} checked={this.state.negotiable1} style={{ borderRadius: 12, borderColor: '#20c997', justifyContent: 'center', alignItems: 'center', height: 25, paddingTop: 5, width: 25, backgroundColor: this.state.negotiable1 ? '#20c997' : 'transparent' }} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, marginLeft: 30, fontFamily: "Medium" }}> NO</Text><CheckBox onPressIn={() => { this.setState({ negotiable2: true }); this.setState({ negotiable1: false }) }} checked={this.state.negotiable2} style={{ borderRadius: 12, borderColor: '#20c997', justifyContent: 'center', alignItems: 'center', height: 25, paddingTop: 5, width: 25, backgroundColor: this.state.negotiable2 ? '#20c997' : 'transparent' }} />
              </View>
            </View>

            <Text style={{ fontSize: 16, marginTop: 10, color: 'rgba(0,0,0,0.7)', fontFamily: "Medium" }}>
              Add images of room, flat or house
            </Text>
            <TouchableOpacity style={{ width: 30, backgroundColor: '#20c997', height: 30, borderRadius: 5, justifyContent: "center", alignItems: 'center' }}><Icon style={{ color: 'white' }} name="md-download" /></TouchableOpacity>


            <View style={{ marginTop: 30 }}>
              <Button onPressIn={() => this.handleEdit()} style={{ borderRadius: 6, backgroundColor: "#20c997" }} block>
                <Text>Submit</Text>
              </Button>
            </View>
          </Content>


        


      </View>
    )
  }
}

const styles = StyleSheet.create({

})
