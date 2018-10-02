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
    Icon, Input, Item,Right
} from 'native-base';

import FontAwesome, {Icons} from 'react-native-fontawesome';


export default class mosabeghe extends Component {


    render() {
        return (
            <Container>
                <Header style={{backgroundColor: '#4A91D3'}}>

                    <Left style={{flexDirection: 'row'}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={{margin: 5, fontSize: 25, textAlign: 'left', color: 'white'}} name={'infinite'}/>

                        </Button>
                    </Left>
                    <Body>
                    <Title style={{fontSize: 20, marginLeft: 40,fontFamily:'homa'}}> مسابقات </Title>

                    </Body>
                    <Right>

                        <Button transparent  onPress={() => this.props.navigation.goBack()}>


                            <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: 'white'}}>
                                <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                            </Text>


                        </Button>
                    </Right>
                </Header>
                <Content style={{marginTop: 25}}>
                    <Card style={{flex: 0}}>
                        <CardItem>

                        </CardItem>
                        <CardItem>
                            <Body>
                            <Image source={require('../img/dog.png')}/>
                            <Text>
                                asdfasfasfdasfasdfasdfasdfasdfasfdsfasdfasdfasdfasdfasdfasdfasdfasdfasdasdfasdfasdfadsfadfadfasdfasdf
                            </Text>
                            </Body>

                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github"/>
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Item>
                                <Input placeholder='نام...' style={{backgroundColor: '#d1d1d1'}}/>
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Item>
                                <Input placeholder='شماره تماس...' style={{backgroundColor: '#d1d1d1'}}/>
                            </Item>
                        </CardItem>

                        <CardItem>
                            <Button block
                                    style={{
                                        marginTop: 10,
                                        marginBottom: 10,
                                        backgroundColor: '#4A91D3',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                            >
                                <Text style={{color: '#fff', fontFamily:'homa'}}>choose file</Text>
                            </Button>
                        </CardItem>
                    </Card>


                    <Button block style={{backgroundColor: '#4A91D3'}}>

                        <Text style={{color: '#fff', fontFamily:'homa'}}>ارسال</Text>
                    </Button>


                </Content>
            </Container>
        );
    }
}