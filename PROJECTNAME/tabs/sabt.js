import React, {Component} from 'react';
import {Text, AsyncStorage} from 'react-native';
import {Container, Header, Content, Item, Input, Icon, Button, Body, Title, Right, Thumbnail, Left,Tab,Tabs} from 'native-base';
import ImagePicker from "react-native-image-picker";

import FontAwesome, {Icons} from 'react-native-fontawesome';

export default class register extends Component {

    state = {
        pickedImage: <Thumbnail source={require('../img/dog.png')}>
        </Thumbnail>
    }

    reset = () => {
        this.setState({
            pickedImage: <Thumbnail source={require('../img/dog.png')}>
            </Thumbnail>

        });
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker({title: "               انتخاب عکس پروفایل        ", maxWidth: 800, maxHeight: 600}, res => {
            if (res.didCancel) {
                console.log("User cancelled!");
            } else if (res.error) {
                console.log("Error", res.error);
            } else {
                this.setState({
                    pickedImage: {uri: res.uri}
                });

            }
        });
    }

    static navigationOptions = {
        headerTitle: 'عضویت'
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            family: ''
        }
    }

    componentDidMount() {
        this.loadIntial
    }

    loadIntial = async () => {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('main')
        }
    }

    login = () => {

        alert(this.state.name)


        fetch('https://www.barenaghola.com/users.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    family: this.state.family
                })
            }
        )
            .then((response) => response.json())
            .then((res => {
                    if (res.success === true) {
                        AsyncStorage.setItem('user', res.user);
                        this.props.navigation.navigate('main');

                    }
                    else {
                        alert(res.message);
                    }

                })
            )
    }


    render() {

        return (


            <Container>

                <Content style={{marginTop: 50,}}>
                    <Right>
                        <Text style={{marginBottom:15,fontFamily:'homa'}}> عکس پروفایل را انتخاب کنید</Text>
                        <Button transparent source={this.state.pickedImage} style={{marginRight:40}}
                                onPress={this.pickImageHandler}>
                            <Thumbnail source={require('../img/dog.png')}>

                            </Thumbnail>

                        </Button>

                    </Right>
                    <Item style={{marginBottom: 10}}>

                        <Icon active name='contact'/>

                        <Input placeholder='نام' onChangeText={(name) => this.setState({name})}/>


                    </Item>

                    <Item style={{marginBottom: 10}}>
                        <Icon active name='contact'/>
                        <Input placeholder='نام خانوادگی'
                               onChangeText={(family) => this.setState({family})}/>

                    </Item>
                    <Item style={{marginBottom: 10}}>

                        <Icon active name='call'/>
                        <Input placeholder='شماره تلفن همراه'
                               onChangeText={(phone) => this.setState({phone})}/>


                    </Item>
                    <Item style={{marginBottom: 10}}>
                        <Icon active name='key'/>
                        <Input placeholder='رمز عبور'
                               onChangeText={(pass) => this.setState({pass})}/>

                    </Item>
                    <Button block
                            style={{
                                marginTop: 50,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#4A91D3'
                            }}
                            onPress={this.login} title={'tehran'}>
                        <Text style={{color: '#fff',fontSize:18,fontFamily:'homa'}}>ثبت نام</Text>
                    </Button>

                </Content>
            </Container>
        )
    }


}