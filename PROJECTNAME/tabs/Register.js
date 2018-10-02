import React, {Component} from 'react';
import {Text, AsyncStorage} from 'react-native';
import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Icon,
    Button,
    Body,
    Title,
    Right,
    Thumbnail,
    Left,
    Tab,
    Tabs,TabHeading
} from 'native-base';

import Tab1 from '../tabs/vorod'
import Tab2 from '../tabs/sabt'

import FontAwesome, {Icons} from 'react-native-fontawesome';

export default class register extends Component {
    render() {
        return (
            <Container  >



                <Header style={{backgroundColor: '#4A91D3'}} >

                    <Left  style={{flexDirection:'row' }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={{margin: 5, fontSize: 20, textAlign: 'left', color: 'white'}} name={'contact'}/>

                        </Button>
                    </Left>


                    <Body>
                    <Title style={{fontSize: 25,marginLeft: 40,  fontFamily:'homa'}}>عضویت </Title>

                    </Body>

                    <Right>

                        <Button transparent  onPress={() => this.props.navigation.goBack()}>
                            <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: 'white'}}>
                                <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                            </Text>




                        </Button>
                    </Right>


                </Header >
<Content>
                <Tabs >
                    <Tab heading={ <TabHeading style= {{backgroundColor: '#4A91D3'}}><Text style={{color:'#fff',fontSize:18,fontFamily:'homa'}}>عضو بودم</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={ <TabHeading style= {{backgroundColor: '#4A91D3'}}><Text style={{color:'#fff',fontSize:18,fontFamily:'homa'}}>عضو میشم</Text></TabHeading>}>
                        <Tab2 />
                    </Tab>
                </Tabs>

            </Content>
            </Container>
        )
    }


}