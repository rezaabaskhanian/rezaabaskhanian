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

import FontAwesome, {Icons} from 'react-native-fontawesome';


const dataArray = [
    {title: "داستان", content: "Lorem ipsum dolor sit amet"},

];


export default class StoryShow extends Component {


    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#4A91D3'}}>



                    <Title style={{fontSize: 20 ,marginTop:10,fontFamily:'homa',marginLeft:120
                    }}> اسم داستان</Title>

                    <Right style={{flexDirection: 'row'}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>

                            <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: 'white'}}>
                                <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                            </Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={{marginTop:25}}>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Icon name='print' Style={{color: '#87838B'}}/>
                                <Body>

                                <Text note>داستان</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Image source={require('../img/dog.png')}/>

                            </Body>

                        </CardItem>

                            <Text style={{marginTop:10 ,backgroundColor:'#f4f4f4',}}
                                  headerStyle={{margin:'auto' }}> asdfasdf sadfasg asgsg asgasg asgad asgafb asgab asga asga asgas asga
                            </Text>

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
        );
    }
}