import React, {Component} from 'react';
import {StyleSheet,Image} from 'react-native'
import {Container, Header, Content, List, ListItem, Text,Thumbnail,Body,Right,Button,Left,Title,CardItem,Card} from 'native-base';

import FontAwesome, {Icons} from 'react-native-fontawesome';


const data = [
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/anime1.jpg",
        title: "انیمیشن",
        rating:'امتیاز:',
        title1:'ششسیلشلشکبیلاشی لاشمینسبلایمن مبامسین ایبلبمنیسالسمن نیابمنسال '
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/kootah1.jpg",
        title: "انیمیشن کوتاه"
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/SERIALI1.jpg",
        title: "کارتون های سریالی"
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/irani-final.jpg",
        title: "کارتون های ایرانی"
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/old-(1).jpg",
        title: "کارتون های قدیمی"
    },

];
export default class App extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#FF8F00'}}>

                    <Left  style={{flexDirection:'row' }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>

                            <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: 'white'}}>
                                <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                            </Text>
                        </Button>
                    </Left>


                    <Body>
                    <Title style={{fontSize: 25,marginLeft: 40 ,fontFamily:'homa' }}>کارتون </Title>

                    </Body>
             <Right>

                 <Button transparent onPress={() => this.props.navigation.goBack()} >

                     <Text style={{margin: 5, fontSize: 22, textAlign: 'left', color: 'white',}}>
                         <FontAwesome>{Icons.film}</FontAwesome>

                     </Text>
                 </Button>
             </Right>

                </Header>
                <Content >
                    <List dataArray={data}
                          renderRow={(data) =>

                              <ListItem>
                                  <Thumbnail large square source={{uri: data.imageUrl}} style={{height: 200, width: null, flex: 1}}/>
                                  <Body>
                                  <Text style={{ fontSize:20,fontFamily:'homa',color:'#545454', marginLeft: 'auto'}}>{data.title}</Text>
                                  <Text style={{ fontSize:10,fontFamily:'homa',color:'#545454', marginLeft: 'auto'}}>{data.rating}</Text>
                                  <Text style={{ fontSize:13,fontFamily:'homa',color:'#545454',marginLeft: 'auto'}}>{data.title1}</Text>
                                  </Body>
                              </ListItem>}>

                    </List>

                </Content>
            </Container>
        );
    }
}