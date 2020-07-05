import React from 'react'
import {View, Text, Dimensions} from 'react-native'

export default class Sidebar extends React.Component{
    render(){
        return(
            <View style={{width:270,height:Dimensions.get('window').height, backgroundColor:'#D17811'}}>
                <Text>
                  Hello sidebar
                </Text>
            </View>
        )
    }
}