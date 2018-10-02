import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native'
import {
    Root,
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
    Icon,
    Card,
    CardItem
} from 'native-base';

import FontAwesome, {Icons} from 'react-native-fontawesome';
import StarRating from 'react-native-star-rating';
import Mosabeghe from "../tabs/mosabeghe";

import Toast from 'react-native-simple-toast';

export default class Fereshte extends Component {


    render() {
        return (

            <Container>
                <Header style={{backgroundColor: '#4A91D3'}}>

                    <Left style={{flexDirection: 'row'}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={{margin: 5, fontSize: 25, textAlign: 'left', color: 'white'}}
                                  name={'color-wand'}/>

                        </Button>
                    </Left>


                    <Body>
                    <Title style={{fontSize: 25, marginLeft: 40, fontFamily: 'homa'}}>مسابقات </Title>

                    </Body>
                    <Right>

                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: 'white'}}>
                                <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                            </Text>


                        </Button>
                    </Right>

                </Header>
                <Content padder>
                    <Card>
                        <CardItem style={{flexDirection:'column' ,borderBottomWidth:3 , borderColor:'#d7d7d7'}} button onPress={() =>

                            this.props.navigation.navigate("Mosabeghe")} >

                            <Body>
                            <Right>

                                <Text style={{fontFamily: 'homa',}}> دابسمش</Text>

                            </Right>
                            <Text style={{fontFamily: 'homa',marginRight:8 ,color:'#c1c1c1'}}> نمشسابمنشاب شیسمنبتشسمن شکسبنشکسمی شستشمنست ئزردظ.ر شثبهشیخهل ینسنیمل </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="flag"/>
                                <Text style={{fontFamily: 'homa',}}>تعداد روزهای باقیمانده:</Text>
                            </Button>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="contacts"/>
                                    <Text style={{fontFamily: 'homa',}}>تعداد افراد شرکت کننده:</Text>
                                </Button>

                            </Body>
                            <Thumbnail  source={require('../img/staged.png')} style={{height: 200, width: 180, flex: 1 }}/>
                        </CardItem>



                        <CardItem style={{flexDirection:'column',borderBottomWidth:3,borderColor:'#d7d7d7'}}    button onPress={() =>

                            Toast.show('در دست ساخت..', Toast.LONG)} >

                            <Body>
                            <Right>

                                <Text style={{fontFamily: 'homa',}}> فرشته باش</Text>
                            </Right>
                            <Text style={{fontFamily: 'homa',margin:'auto',marginRight:8 ,color:'#c1c1c1'}} > نمشسابمنشاب شیسمنبتشسمن شکسبنشکسمی شستشمنست ئزردظ.ر شثبهشیخهل ینسنیمل </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="flag"/>
                                <Text style={{fontFamily: 'homa',}}>تعداد روزهای باقیمانده:</Text>

                            </Button>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="contacts"/>
                                    <Text style={{fontFamily: 'homa',}}>تعداد افراد شرکت کننده:</Text>

                                </Button>
                            </Body>
                            <Thumbnail  source={require('../img/staged.png')} style={{height: 200, width: 180, flex: 1}}/>


                        </CardItem >


                        <CardItem style={{flexDirection:'column',borderBottomWidth:3,borderColor:'#d7d7d7'}}   button onPress={() =>

                            Toast.show('در دست ساخت..', Toast.LONG)} >

                            <Body>
                            <Right>

                                <Text style={{fontFamily: 'homa',}}>نوستال شو</Text>

                            </Right>
                            <Text style={{fontFamily: 'homa',marginRight:8 ,color:'#c1c1c1'}} > نمشسابمنشاب شیسمنبتشسمن شکسبنشکسمی شستشمنست ئزردظ.ر شثبهشیخهل ینسنیمل </Text>

                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="flag"/>
                                    <Text style={{fontFamily: 'homa',}}>تعداد روزهای باقیمانده:</Text>
                                </Button>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="contacts"/>
                                    <Text style={{fontFamily: 'homa'}}>تعداد افراد شرکت کننده:</Text>
                                </Button>

                            </Body>
                            <Thumbnail  source={require('../img/staged.png')} style={{height: 200, width: 180, flex: 1}}/>
                        </CardItem >


                    </Card>

                </Content>
            </Container>


        );
    }
}
