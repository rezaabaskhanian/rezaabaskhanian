import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native'
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Text,
    Thumbnail,
    Body,
    Right,
    Button,
    Left,
    Title,
    Card,
    CardItem,
    Icon,
    Accordion
} from 'native-base';

import FontAwesome, {Icons} from 'react-native-fontawesome';
const dataArray1=[{title:'مواد لازم'  , content:"شیر ............................2 لیوان\n" +
    "خامه ..................................صبحانه 4 قاشق غذاخوری\n" +
    "پودرکاکائو ...............................2 قاشق غذاخوری\n" +
    "شکر .................................. نصف لیوان\n" +
    "پودر ژلاتین ..............................3 قاشق غذاخوری"}];

const dataArray = [
    {title: "طرز تهیه", content: "دسر شیر کاکائو دسری بسیار خوشمزه و شیکی هست و طعم بینظیری دارد .این دسر براحتی درست می شود و مناسب مهمانی ها و مجالس است و طرفداران زیادی دارد.امروز به آموزش آن می پردازیم .با ما همراه باشید."},

];
export default class Ashpazi extends Component {


    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#4A91D3'}}>



                    <Title style={{fontSize: 20 ,marginTop:10,fontFamily:'homa',marginLeft:120
                    }}> اسم غذا</Title>

                    <Right style={{flexDirection: 'row'}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>

                            <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: 'white'}}>
                                <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                            </Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={{marginTop:30}}>
                    <Card style={{flex: 0}}>
                        <CardItem header boarder>
                            <Left>
                                <Icon name='ice-cream' Style={{color: '#87838B'}}/>
                                <Body>

                                <Text note>آشپزی</Text>
                                </Body>
                            </Left>
                        </CardItem >
                        <CardItem header boarder>
                            <Body>
                            <Image source={require('../img/dog.png')}/>

                            </Body>

                        </CardItem>
                            <Accordion style={{marginTop:10 ,backgroundColor:'#f4f4f4'}} dataArray={dataArray1} contentStyle={{color: "#5b7fff"}}
                                       headerStyle={{margin:'auto' }}/>
                            <Accordion style={{marginTop:10 ,backgroundColor:'#f4f4f4'}} dataArray={dataArray} contentStyle={{color: "#5b7fff"}}
                                       headerStyle={{margin:'auto' }}/>

                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github"/>
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>


                    </Card>
                </Content>


            </Container>
        )}}