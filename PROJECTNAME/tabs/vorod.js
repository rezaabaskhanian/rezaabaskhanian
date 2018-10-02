import React, {Component} from 'react';
import {Text, AsyncStorage} from 'react-native';
import {Container, Header, Content, Item, Input, Icon, Button, Body, Title, Right, Thumbnail, Left,Tab,Tabs} from 'native-base';


import FontAwesome, {Icons} from 'react-native-fontawesome';

export default class register extends Component {
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

                <Content style={{marginTop: 50 ,}}>
                    <Right>
                        <Thumbnail large source={require('../img/dog.png')} style={{marginBottom: 20}}/>
                    </Right>

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
                        <Text style={{color: '#fff',fontSize:18,}}>ورود</Text>
                    </Button>

                </Content>
            </Container>
        )
    }


}