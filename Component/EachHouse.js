import React, { Component } from 'react'

import { ActivityIndicator, View, Image, Linking, TextInput, Alert, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Card, Button, Icon, Picker, Item, Input, Tab, Header, Tabs, ScrollableTab, Title, CardItem, Thumbnail, Text, Left, Body, Right, Badge, Spinner } from 'native-base';

export class EachHouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            id: '',
            error: '',
            avail:true,
            isError: false,
            isLoading: false
        }
    }

    update = function (id, _id) {
        if (!this.state.id) {
            this.setState({ isError: true })
            return this.setState({ error: 'please enter HOUSE ID' })
        }
        this.setState({ isLoading: true })
        fetch(`http://192.168.43.164:3000/egapi/v1/edit-apartment/${this.state.id}`, {
            method: 'Post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                isAvailable: false,
                _id
            })

        })
            .then((response) => response.json())
            .then(resJson => {

                if (resJson.error) {

                    this.setState({ error: resJson.error })
                    this.setState({ isError: true })
                    this.setState({ isLoading: false })
                }
                else {

                    Alert.alert('Update successful', 'Apartment, purchased. this apartment would no longer be present for rentage')
                    this.setState({ isLoading: false })
                    this.setState({avail:false})
                    this.setState({id:''})
                }
            })
            .catch(err => {
                this.setState({ isLoading: false })
                this.setState({ error: err.message })
                this.setState({ isError: true })
            })
    }
    render() {
        const apartment = this.props.route.params.apartment
        if(!this.state.avail){
            apartment.isAvailable= false
        }

        return (

            <View style={{ flex: 1, backgroundColor: "", flexDirection: 'column' }}>
                <Header style={{ backgroundColor: "#20c997", elevation: 0 }} androidStatusBarColor="#20c997">

<View style={{ flexDirection: 'row', width: Dimensions.get('window').width }}>


    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, paddingLeft: 20 }}>
        <TouchableOpacity onPressIn={() => this.props.navigation.navigate("Homes")}><Icon style={{ fontSize: 24, color: 'white' }} name="md-arrow-back" /></TouchableOpacity>
        <Text style={{ color: "white", fontSize: 23, marginLeft: 40, fontFamily: "Medium" }}>
            House Details
  </Text>
    </View>
    <View style={{ position: 'absolute', right: 10, top: 10, width: 40 }}>

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
                <Content>

                    
                    {
                        this.state.isError && <View style={{ paddingHorizontal: 20, marginTop: 6, width: Dimensions.get('window').width }}>
                            <View style={{ backgroundColor: "rgba(200,70,50,1)", padding: 10, borderRadius: 3 }}>
                                <Text style={{ color: 'white' }}>{this.state.error}</Text>
                            </View>
                        </View>
                    }
                    {!this.state.isLoading ?
                        <View style={{ height: Dimensions.get('window').height }}>
                            <ScrollView>
                                <Card style={{ marginTop: 0, padding: 0, elevation: 0 }}>

                                    <CardItem cardBody>
                                        <Image source={{ uri: apartment.imageUrls[0] }} style={{ height: 200, width: null, flex: 1 }} />
                                    </CardItem>
                                    <CardItem>

                                        <View>
                                            <Text style={{ color: 'rgba(0,0,0,0.9)', borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 1, fontSize: 25, marginBottom: 10, fontFamily: 'Medium' }}>
                                                {apartment.description}
                                            </Text>

                                            <Text style={{ color: 'rgba(0,0,0,0.8)', fontSize: 16, marginBottom: 10, fontFamily: 'Medium' }}>
                                                {apartment.address}
                                            </Text>
                                            <Text style={{ color: 'rgba(0,0,0,0.7)', fontSize: 14, marginBottom: 10, fontFamily: 'Medium' }}>Price: ₦{apartment.price} | {apartment.priceNegotiable ? 'Negotiable' : 'Not negotiable'} </Text>

                                            <Text style={{ color: 'rgba(0,0,0,0.7)', fontSize: 14, marginBottom: 10, fontFamily: 'Medium' }}>
                                                Contact: {apartment.renter.phoneNumber}

                                                <Text>{apartment.id}</Text>
                                            </Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Button onPressIn={() => {
                                                    Linking.openURL(`tel:${apartment.renter.phoneNumber}`)
                                                }} style={{ borderRadius: 6, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: "#20c997" }} block>
                                                    <Text style={{ marginRight: 10 }}>Call Renter <Icon name="md-call" style={{ color: 'white', fontSize: 20 }} /></Text>
                                                </Button>
                                                <Button onPressIn={() => {
                                                    Linking.openURL(`sms:${apartment.renter.phoneNumber}`)
                                                }} style={{ borderRadius: 6, flex: 1, marginLeft: 10, flexDirection: "row", backgroundColor: "#20c997" }} block>
                                                    <Text style={{ marginRight: 10 }}>Message <Icon name="md-mail" style={{ color: 'white', fontSize: 20 }} /></Text>
                                                </Button>
                                            </View>


                                        </View>
                                    </CardItem>


                                </Card>
                            </ScrollView>

                        </View>
                        :
                        <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
                            <Spinner size="large" />
                            <Text style={{ fontSize: 15, marginTop: 10, color: 'rgba(0,0,0,0.7)', fontFamily: "Medium" }}>
                                Please wait as we update house details
                    </Text>
                        </View>

                    }


                 


                </Content>
                {!this.state.isLoading && <View style={{ position: "absolute",borderTopColor:'green', borderTopWidth:1, bottom: 0, backgroundColor:'white' }}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, marginTop: 10, color: 'blue', fontFamily: "Medium" }}>
                                Please if you ever purchase this apartment, request the HOUSE ID from the renter and type it here for verification
                                            </Text>
                            <TextInput onChangeText={(value) => { this.setState({ id: value }); this.setState({ isError: false }) }} keyboardType="default" onFocus={() => this.setState({ current: "first" })} style={{ borderWidth: 1, borderRadius: 5, fontFamily: 'Light', borderColor: this.state.current === "first" ? '#20c997' : 'transparent', backgroundColor: 'rgba(0,0,0,0.05)', marginTop: 4, paddingHorizontal: 13, paddingVertical: 5, fontSize: 12 }} placeholder="Enter HOUSE ID" />

                        </View>
                        <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 40, paddingBottom: 20, marginTop: 10 }}>
                            <Button onPress={() => this.update(apartment.id,apartment._id)} style={{ borderRadius: 6, height:33, backgroundColor: "#20c997" }} block>
                                <Text>Submit HOUSE ID</Text>
                            </Button>
                        </View>

                    </View>}
            </View>
        )
    }
}

export default EachHouse
