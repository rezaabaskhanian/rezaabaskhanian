import React, {Component} from 'react';
import {Image} from 'react-native'
import {
    Container,
    Header,
    Content,
    Text,
    Body,
    Button,
    Left,
    Title,
    Card,
    CardItem,
    Icon,
    Accordion,Right
} from 'native-base';
import ImageSlider from 'react-native-image-slider';
import FontAwesome, {Icons} from 'react-native-fontawesome';


const dataArray = [
    {title: "خلاصه فیلم", content: "Lorem ipsum dolor sit ametsadfasfasf asdfasfdasd asdfasdf adfasfd asdfasdf adfasdf asdfasdf adfsadf asdfasdfa asdfasdf asdfasdf adfasdf"},

];


export default class Namayesh extends Component {


    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#4A91D3'}}>



                    <Title style={{fontSize: 20 ,marginTop:10,fontFamily:'homa',marginLeft:120
                        }}> اسم انیمیشن</Title>

                    <Right style={{flexDirection: 'row'}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>

                            <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: 'white'}}>
                                <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                            </Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem header bordered>
                            <Left>
                                <Icon name='film' Style={{color: '#87838B'}}/>
                                <Body>
                                <Text>انیمیشن</Text>
                                <Text note>نسل بعدی</Text>
                                </Body>
                            </Left>
                        </CardItem >
                        <CardItem style={{marginLeft:20}} >
                            <Body>
                            <ImageSlider  style={{height:200}} images={[
                                'http://placeimg.com/640/480/any',
                                'http://placeimg.com/640/480/any',
                                'http://placeimg.com/640/480/any'
                            ]}
                                         autoPlayWithInterval={2000}/>
                            </Body>
                        </CardItem>


                        <Accordion  style={{marginTop:10 ,backgroundColor:'#f4f4f4'}} dataArray={dataArray} contentStyle={{color: "#5b7fff"}}
                                    headerStyle={{margin:'auto' }}/>


                        <CardItem header bordered>

                            <Left>
                                <Button transparent>
                                    <Icon active name="globe" />
                                    <Text>فارسی</Text>
                                </Button>
                            </Left>
                            <Body>
                            <Button transparent>
                                <Icon active name="stopwatch" />
                                <Text>96 Min</Text>
                            </Button>
                            </Body>
                            <Right>
                                <Icon active name="videocam" />
                                <Text>4:3</Text>
                            </Right>
                        </CardItem>
                        <CardItem header bordered>
                            <Body>
                            <Image source={require('../img/dog.png')}/>
                            </Body>


                        </CardItem >


                            <Button block
                                    style={{

                                        marginTop: 50,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#4A91D3'
                                    }}
                            >
                                <Text style={{color: '#fff'}}>لینک دانلود</Text>
                            </Button>



                    </Card>
                </Content>
            </Container>
        );
    }
}