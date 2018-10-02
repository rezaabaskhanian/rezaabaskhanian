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


export default class tamas extends Component {


    render() {
        return (
            <Container>
                <Header style={{backgroundColor: '#FF8F00'}}>

                    <Left style={{flexDirection: 'row'}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={{margin: 5, fontSize: 25, textAlign: 'left', color: 'white'}} name={'call'}/>

                        </Button>
                    </Left>
                    <Body>
                    <Title style={{fontSize: 20, marginLeft: 40,fontFamily:'homa'}}> تماس با ما </Title>

                    </Body>
                    <Right>
                        <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: 'white'}}>
                            <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                        </Text>

                        <Button transparent  onPress={() => this.props.navigation.goBack()}>





                        </Button>
                    </Right>
                </Header>
                <Content style={{marginTop: 25}}>
                    <Card style={{flex: 0}}>

                        <CardItem>
                            <Body>
                            <Image source={require('../img/contact.png')}/>


                            <Text>
                                asdfasfasfdasfasdfasdfasdfasdfasfdsfasdfasdfasdfasdfasdfasdfasdfasdfasdasdfasdfasdfadsfadfadfasdfasdf
                            </Text>

                            </Body>


                        </CardItem>

                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name={'paper-plane'}/>

                                </Button>



                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text style={{fontSize: 22, color: '#87838B',fontFamily:'homa'}}>
                                        <FontAwesome>{Icons.instagram}</FontAwesome>
                                    </Text>

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
                                <Input placeholder='شماره تماس یا ایمیل...' style={{backgroundColor: '#d1d1d1'}}/>
                            </Item>
                        </CardItem>

                        <CardItem>
                            <Item>
                                <Input placeholder='متن....' style={{backgroundColor: '#d1d1d1',height:100}}
                                       multiline={true}
                                       numberOfLines={10}

                                />
                            </Item>
                        </CardItem>

                    </Card>


                    <Button block style={{backgroundColor: '#FF8F00'}}>

                        <Text style={{color: '#fff', fontFamily:'homa'}}>ارسال</Text>
                    </Button>


                </Content>
            </Container>
        );
    }
}