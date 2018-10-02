import React from "react";
import {
    createDrawerNavigator,
    StackNavigator, DrawerItems, DrawerActions, TabNavigator
} from 'react-navigation';
import {
    Text,
} from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Root,
    Body,
    Thumbnail,Icon

} from 'native-base';
import FontAwesome, {Icons} from 'react-native-fontawesome';

import amoozesh from './amoozesh/amoozesh'
import tamas from './tamas/tamas'
import Main from './Src/Main'
import Splash from './Src/Splash'
import Story from './story/story.home'
import Register from './tabs/Register'
import Kardasti from './kardasti/kardasti'
import Ashpazi from './ashpazi/ashpazi'

import Namayesh from './animation/cartoon.namayesh'
import AshpaziShow from './ashpazi/ashpazi.show'
import StoryShow from './story/story.show'
import Mosabeghe from './tabs/mosabeghe'
import majale from './tabs/majale'

import fereshte from './fereshte/fereshte'


const derawer = createDrawerNavigator(
    {
        خانه: {
            screen: Main,
            navigationOptions: () => ({
                drawerIcon: (<Text style={{fontSize: 25, textAlign: 'left', color: '#302F30'}}>
                    <FontAwesome>{Icons.home}</FontAwesome>
                </Text>),


            })
        },


        رمان: {
            screen: Story,
            navigationOptions: () => ({

                drawerIcon: (<Text style={{fontSize: 25, color: 'white',fontFamily:'homa'}}>
                    <FontAwesome>{Icons.book}</FontAwesome>
                </Text>)
            })
        },
        آموزشی: {
            screen: amoozesh,
            navigationOptions: () => ({
                drawerIcon: (
                    <Text style={{fontSize: 22, color: 'white',fontFamily:'homa'}}>
                    <FontAwesome>{Icons.graduationCap}</FontAwesome>
                </Text>)
            })
        },

        کاردستی: {
            screen: Kardasti,
            navigationOptions: () => ({
                drawerIcon: (<Icon style={{margin: 5, fontSize: 22, textAlign: 'left', color: 'white'}} name={'book'}/>
                )
            })
        },

        آشپزی: {
            screen: Ashpazi,
            navigationOptions: () => ({
                drawerIcon: (<Icon style={{margin: 5, fontSize: 22, textAlign: 'left', color: 'white'}} name={'cafe'}/>
                )
            })
        },

        مسابقه: {
            screen: fereshte,
            navigationOptions: () => ({
                drawerIcon: ( <Icon style={{margin: 5, fontSize: 22, textAlign: 'left', color: 'white'}} name={'color-wand'}/>
                  )
            })
        },
        تماس: {
            screen: tamas,
            navigationOptions: () => ({
                drawerIcon: (<Text style={{fontSize: 25, color: 'white',fontFamily:'homa'}}>
                    <FontAwesome>{Icons.phone}</FontAwesome>
                </Text>)
            })
        },


    }, {
        drawerPosition: 'left',
        initialRouteName: 'خانه',

        contentOptions: {
            labelStyle: {
                fontSize: 16,
                marginLeft: 160,


            },

            activeTintColor: '#302F30',
            inactiveTintColor: '#fff',
            itemsContainerStyle: {
                marginVertical: 0,

            },
            iconContainerStyle: {
                opacity: 1
            }
        },

        contentComponent: (props) => (
            <Root>
                <Container>
                    <Header style={{height: 200, backgroundColor: '#4A91D3'}}>
                        <Body>
                        <Thumbnail style={{width: 250, height: 150}} source={require('./img/darwer.png')}/>
                        </Body>
                    </Header>
                    <Content style={{backgroundColor: '#302f30'}}>
                        <DrawerItems {...props} />
                    </Content>
                </Container>
            </Root>

        ),

        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',


    },
);


const App = StackNavigator(

    {

        Home: {
            screen: Splash,
            navigationOptions: () => ({
                header: null,
            })
        },

        Main: {
            screen: Main,

            screen: derawer,

            navigationOptions: () => ({
                header: null,
            }),

        },


        Story: {
            screen: Story,
            navigationOptions: () => ({
                header: null
            }),

        },
        Register: {
            screen: Register,
            navigationOptions: () => ({
                header: null
            }),
        },

        Kardasti: {
            screen: Kardasti,
            navigationOptions: () => ({
                header: null
            }),
        },
        Ashpazi: {
            screen: Ashpazi,
            navigationOptions: () => ({
                header: null
            }),
        },
        Namayesh: {
            screen: Namayesh,
            navigationOptions: () => ({
                header: null
            }),
        },

        AshpaziShow: {
            screen: AshpaziShow,
            navigationOptions: () => ({
                header: null
            }),
        },
        StoryShow: {
            screen: StoryShow,
            navigationOptions: () => ({
                header: null
            }),
        },
        Mosabeghe: {
            screen: Mosabeghe,
            navigationOptions: () => ({
                header: null
            }),
        },
        fereshte: {
            screen: fereshte,
            navigationOptions: () => ({
                header: null
            }),
        },
        sabtenam: {
            screen: Register,
            navigationOptions: () => ({
                header: null
            }),
        },
        amoozesh: {
            screen: amoozesh,
            navigationOptions: () => ({
                header: null
            }),
        },
        majale:{
            screen:majale,
            navigationOptions: () => ({
                header: null
            }),
        },
        tamas:{
            screen:tamas,
            navigationOptions: () => ({
                header: null
            }),
        }
    });


export default
() =>
    <Root>
        <App/>
    </Root>;