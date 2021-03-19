import React, { Component } from 'react'
import { View , StyleSheet,Animated} from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { Container, Content, Card, Button, Icon, Item, Input, Tab, Header, Tabs, ScrollableTab, Title, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Preload extends Component {
    constructor(props){
        super(props)
        this.marginTop= new Animated.Value(-410)
        this.opacity = new Animated.Value(0)
        this.textOpacity1 = new Animated.Value(0)
        this.textOpacity3 = new Animated.Value(0)
        this.marginRight= new Animated.Value(-40)
        this.textOpacity2 = new Animated.Value(0)
        this.marginRight2= new Animated.Value(-40)
        this.state={
            page:0
        }
    }
 
    animate =()=>{
        Animated.timing(this.marginTop,{
            toValue:0,
            duration:900
        }).start()
        Animated.timing(this.opacity,{
            toValue:1,
            duration:900
        }).start()

    }
    animateText1= ()=>{
        Animated.timing(this.textOpacity1,{
            toValue:1,
            duration:800
        }).start()
        Animated.timing(this.marginRight,{
            toValue:0,
            duration:800
        }).start()
    }
    animateText2= ()=>{
        Animated.timing(this.textOpacity2,{
            toValue:1,
            duration:900
        }).start()
        Animated.timing(this.marginRight2,{
            toValue:0,
            duration:900
        }).start()
    }
    animateText3= ()=>{
        Animated.timing(this.textOpacity3,{
            toValue:1,
            duration:900
        }).start()
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({page:1})
            this.animateText1()
        }, 5000)
    }

    render() {
        if(this.state.page===0){
            this.animate()
        }
        
     
        return (
            <View style={styles.container}>
                <Header  style={{backgroundColor:"transparent", elevation:0}} androidStatusBarColor="rgba(0,200,110,1)"/>
               {
                   this.state.page ===0 &&  <>
                   <Animated.View style={[styles.logo, {marginTop:this.marginTop, opacity:this.opacity}]}>
                   <Icon style={{fontSize:60, color:'white'}} name="md-people"/>
                   <Icon style={{fontSize:90, color:'white'}} name="md-home"/>
                   </Animated.View>
                   <Animated.View>
                   <Text style={[styles.logotext]}>Easy-Get</Text>
                   </Animated.View>
                   </>
                  
               }

               {
                this.state.page ===1 && <Animated.View style={{padding:30,marginRight:this.marginRight, opacity:this.textOpacity1}}>
                    <View>
                    <Icon name="md-locate" style={{fontSize:40, color:'white'}}/> 
                    <Icon name="md-home" style={{fontSize:70,marginTop:8, color:'white'}}/> 
                    </View>
     
                  <Text style={{fontSize:40, fontFamily:'Regular', color:'white'}}>
                     Easily locate a room, flat, self contain or house to let
                  </Text>
                   <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
                   <TouchableOpacity onPressIn={()=> {
                       this.setState({page:2})
                       this.animateText2()
                       }}   style={{backgroundColor:'white', borderRadius:120,marginTop:80, height:70, width:70,justifyContent:'center', alignItems:'center'}}>
                      <Icon style={{fontSize:40, color:'#20c997'}} name="md-arrow-forward"/>
                  </TouchableOpacity>
                   </View>
                 

                </Animated.View>
               }

            {
                this.state.page ===2 && <Animated.View style={{padding:30, opacity:this.textOpacity2}}>
                    <View>
                    <Icon name="md-eye" style={{fontSize:40, color:'white', marginRight:-30}}/>
                    <Icon name="md-home" style={{fontSize:70,marginTop:8, color:'white'}}/> 
                    </View>
               
                   
                  <Text style={{fontSize:30, fontFamily:'Regular', color:'white'}}>
                    Make everyone know that you have a room, flat, self contain or house for rentage.
                  </Text>
                   <Animated.View style={{justifyContent:'flex-end',marginRight:this.marginRight2, flexDirection:'row'}}>
                   <TouchableOpacity onPressIn={()=> { this.animateText3(); this.setState({page:3})}}   style={{backgroundColor:'white', borderRadius:120,marginTop:80, height:70, width:70,justifyContent:'center', alignItems:'center'}}>
                      <Icon style={{fontSize:40, color:'#20c997'}} name="md-arrow-forward"/>
                  </TouchableOpacity>
                   </Animated.View>


                   <Animated.View style={{justifyContent:'flex-start',marginRight:this.marginRight2, flexDirection:'row'}}>
                   <TouchableOpacity onPressIn={()=>  this.setState({page:1})}   style={{backgroundColor:'white', borderRadius:120,marginTop:80, height:60, width:60,justifyContent:'center', alignItems:'center'}}>
                      <Icon style={{fontSize:30, color:'#20c997'}} name="md-arrow-back"/>
                  </TouchableOpacity>
                   </Animated.View>
                 

                </Animated.View>
               }


                {
                this.state.page ===3 && <Animated.View style={{padding:30,marginTop:-150, opacity:this.textOpacity3}}>
                    <Text style={{textAlign:'center',fontSize:30,marginBottom:20, fontFamily:'Medium', color:"white"}}>
                      Do you want to
                      </Text>

                   <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Homes')} style={{backgroundColor:'white', borderRadius:10,marginTop:30,padding:40, height:160,justifyContent:'center', alignItems:'center'}}>
                      <Icon name="md-eye" style={{fontSize:40, color:'#20c997'}}/>
                      <Text style={{textAlign:'center', fontFamily:'Medium', color:"rgba(0,0,0,0.8)"}}>
                      Find a  room, flat, self contain or house for rentage?
                      </Text>
                      <Icon style={{fontSize:30, color:'#20c997'}} name="md-arrow-forward"/>
                  </TouchableOpacity>

                  <Text style={{textAlign:'center', marginTop:60, fontFamily:'Medium', color:"white"}}>
                      OR
                      </Text>


                  <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}  style={{backgroundColor:'#20c997',borderColor:'white', borderWidth:2,marginTop:-50, borderRadius:10,marginTop:80,padding:40, height:160,justifyContent:'center', alignItems:'center'}}>
                      <Icon name="md-home" style={{fontSize:40, color:'white'}}/>
                      <Text style={{textAlign:'center', fontFamily:'Medium', color:"white"}}>
                       Make people aware of a room, flat, self contain or house for rentage?
                      </Text>
                      <Icon style={{fontSize:30, color:'white'}} name="md-arrow-forward"/>
                  </TouchableOpacity>
                </Animated.View>
               }
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,200,110,1)',
        justifyContent:'center',
        alignItems:'center'
    },
    logotext:{
     color:'white',
     fontFamily:'Medium',
     fontSize:50
    },
    logo:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        width:190,
        height:190,
        borderColor:'white',
        borderRadius:100
    }
})

export default Preload
