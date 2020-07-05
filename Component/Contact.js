import React, { Component } from "react";
import {View, ToastAndroid, TouchableOpacity} from 'react-native'
import { Container, Header,Left, Body,Button,Text,Toast,Root, Segment,Card, CardItem, Right,Item, Input, Label, Title, Icon, Content, Textarea, Form } from "native-base";
 "native-base";
export default class Contact extends Component {
    state={
        problem:'rgba(0,0,0,0.2)',
        name:'rgba(0,0,0,0.2)',
        phone:'rgba(0,0,0,0.2)',
        page:1

    }
  render() {

    return (
      <Container>
            <Root>
        <Header  androidStatusBarColor='#BC7409'  style={{backgroundColor:'#BC7409'}}>
            <Left>
                <Button transparent onPress={()=> this.props.navigation.navigate("Home")}>
                <Icon name="md-arrow-back" style={{color:'white'}} />
                </Button>
               
            </Left>
            <Body style={{flexDirection:'row', alignItems:"center"}}>
                <Title>
                    Contact Us
                   
                </Title>
                <View style={{marginLeft:20}}>
                {/* <Icon name="git-network"   style={{color:'white'}}/> */}
                </View>
                {/* md-restaurant */}
               
            </Body>
        </Header>


        <Segment style={{backgroundColor:"white"}}>
          <Button   onPress={()=>(this.setState({page:1}))} bordered transparent warning style={{ backgroundColor:this.state.page===1?"#BC7409": null}}  first>
            <Text>Message us</Text>
          </Button>
          <Button  bordered transparent warning  style={{backgroundColor:this.state.page===2?"#BC7409": null}}  onPress={()=>(this.setState({page:2}))} warning bordered last>
            <Text>our contact details</Text>
          </Button>
        </Segment>
        <Content padder>
        {
            this.state.page===1 ?
            <Form style={{paddingHorizontal:7}}>
            
            <Textarea onEndEditing={()=> this.setState({problem:'rgba(0,0,0,0.2)'})}   onFocus={()=> this.setState({problem:'#BC7409'})} rowSpan={5} floatingLabel={true} style={{padding:10, backgroundColor:'rgba(0,0,0,0.05)',borderTopRightRadius:10, borderTopLeftRadius:10, borderBottomWidth:2,fontSize:15, borderBottomColor:this.state.problem }}  placeholder="Describe your problem" placeholderTextColor="rgba(0,0,0,0.4)"  />
            <Item floatingLabel  style={{paddingBottom:8, backgroundColor:'rgba(0,0,0,0.05)',borderBottomColor:this.state.name,borderBottomWidth:2, marginTop:24}}  last>
              <Label style={{fontFamily:'Regular'}}>Name</Label>
              
              <Input  onEndEditing={()=> this.setState({name:'rgba(0,0,0,0.2)'})}   onFocus={()=> this.setState({name:'#BC7409'})} />
              <Icon name='md-contact' style={{color:'rgba(0,0,0,0.3)', fontSize:32}} />
 
            </Item>
            <Item floatingLabel last style={{paddingBottom:8, backgroundColor:'rgba(0,0,0,0.05)',borderBottomWidth:2, marginTop:24, borderBottomColor:this.state.phone}}>
              <Label style={{fontFamily:'Regular'}}>Phone number</Label>
              <Input onEndEditing={()=> this.setState({phone:'rgba(0,0,0,0.2)'})}  onFocus={()=> this.setState({phone:'#BC7409'})} />
              <Icon name='md-phone-portrait' style={{color:'rgba(0,0,0,0.3)', fontSize:32}} />
            </Item>
          </Form>
            
            
            
            
            
            :
            <Card style={{elevation:1, borderColor:'white'}}>
            <CardItem>
              <Icon active name="md-mail" style={{color:'rgba(238, 44, 44, 0.8)'}} />
              <Text style={{fontFamily:"Regular",marginLeft:8, color:'rgba(0,0,0,0.7)', fontSize:16}}>perfecttreats@gmail.com</Text>
              <Right>
                
                  <TouchableOpacity onPress={()=> Toast.show({text:"Open this in the browser ?",type:'success', duration:10000, buttonText:"Open", position:'bottom'})}>
                  <Icon name="arrow-forward" />
                  </TouchableOpacity>
                
           
                
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-facebook" style={{color:'rgb(65, 62, 241)', fontSize:32}} />
              <Text style={{fontFamily:"Regular",color:'rgba(0,0,0,0.7)', marginLeft:8, fontSize:16}}>Perfectteastsfoods</Text>
              <Right style={{marginRight:-14}}>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>

             <CardItem>
              <Icon active name="logo-twitter" style={{color:'rgba(10, 144, 233, 0.938)', fontSize:32}} />
              <Text style={{fontFamily:"Regular",color:'rgba(0,0,0,0.7)',marginLeft:8, fontSize:16}}>Perfecttreats003</Text>
              <Right style={{marginRight:-17}}>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>

             <CardItem>
              <Icon active name="md-phone-portrait" style={{color:'rgba(14, 187, 72, 0.938)', fontSize:32}} />
              <Text style={{fontFamily:"Regular",color:'rgba(0,0,0,0.7)', fontSize:16}}>+2347031850081</Text>
              <Right style={{marginRight:-21}}>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-instagram" style={{color:'rgba(238, 18, 18, 0.938)', fontSize:32}} />
              <Text style={{fontFamily:"Regular",color:'rgba(0,0,0,0.7)',marginLeft:8, fontSize:16}}>@Perfect Treat</Text>
              <Right>
                <Icon name="arrow-forward" style={{marginRight:-15}} />
              </Right>
             </CardItem>
           </Card>
        }
         
        
        </Content>
        {
            this.state.page===1&&
            <Button style={{backgroundColor:'#BC7409', width:140, position:'absolute',bottom:10, right:10}}>
            <Text>SEND MESSAGE</Text>
          </Button>
        }
        </Root>
      
      </Container>
    );
  }
}