import React, {Component} from "react";
import {
    Text
    , Animated, Easing
} from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Thumbnail,
    CardItem,
    Card,
    Icon, Footer, FooterTab, Root, Toast, ListItem, List
} from 'native-base';


import {TabNavigator, DrawerNavigator, NavigationActions, DrawerItems, StackNavigator} from 'react-navigation'
import FontAwesome, {Icons} from 'react-native-fontawesome';


import {YellowBox} from 'react-native';

import amoozesh from '../amoozesh/amoozesh'
import AshpaziShow from '../ashpazi/ashpazi.show'


import Register from '../tabs/Register'
import majale from '../tabs/majale'

import Mosabeghe from '../tabs/mosabeghe'

import axios from 'axios'

import Story from "../story/story.home";

import Kardasti from "../kardasti/kardasti";

import {Rating, AirbnbRating} from 'react-native-ratings';

import StoryShow from '../story/story.show'

import StarRating from 'react-native-star-rating';
import Ashpazi from '../ashpazi/ashpazi'

const data = [
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/anime1.jpg",
        title: "انیمیشن",
        rating: 'امتیاز:',
        title1: ' لش لشک بیل اشی لاشم ینسبلایمن مبامسین ایبلبمنی سال سمن نیابمن سال '
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/kootah1.jpg",
        title: "انیمیشن کوتاه"
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/SERIALI1.jpg",
        title: "کارتون های سریالی"
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/irani-final.jpg",
        title: "کارتون های ایرانی"
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/old-(1).jpg",
        title: "کارتون های قدیمی"
    },

];


class main extends Component {


    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0)
        this.state = {Album: [],starCount: 1}

    }


    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    SampleFunction = (Album) => {
        this.props.navigation.navigate('کارتون', {Album})
    }


    componentDidMount() {
        this.animate()
    }

    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }


    render() {
        {/* slide show var */
        }
        const textSize = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [10, 20, 10]
        })

        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
        return (

            <Root>
            <Container>

                <Header style={{backgroundColor: '#4A91D3'}}>
                    <Left style={{flexDirection: 'row'}}>

                        <Button transparent source={this.state.pickedImage} style={{marginLeft: 10}}
                                onPress={() => this.props.navigation.navigate("Register")}>

                            <Thumbnail source={require('../img/dog.png')}>
                            </Thumbnail>

                        </Button>

                        <Animated.Text
                            style={{
                                fontSize: textSize,
                                fontFamily: 'homa',
                                color: 'white'
                            }}>
                            ثبت نام
                        </Animated.Text>


                    </Left>

                    <Right>
                        <Body>

                        <Title style={{fontSize: 30, fontFamily: 'homa'}}>بره ناقلا</Title>
                        </Body>

                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>

                            <Text style={{marginBottom: 10, fontSize: 20, textAlign: 'left', color: 'white'}}>
                                <FontAwesome>{Icons.bars}</FontAwesome>

                            </Text>
                        </Button>
                    </Right>
                </Header>


                <Content style={{backgroundColor: '#f4f4f4'}}>
                    <List dataArray={data}
                          renderRow={(data) =>

                              <ListItem>
                                  <Body style={{marginBottom: 100}}>
                                  <Text style={{
                                      fontSize: 20,
                                      fontFamily: 'homa',
                                      color: '#545454',
                                      margin: 8
                                  }}>{data.title}</Text>
                                  <StarRating
                                      reversed={true}
                                      disabled={false}
                                      maxStars={5}
                                      starSize={15}
                                      fullStarColor={'#FF8F00'}
                                      rating={this.state.starCount}
                                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                                      containerStyle={{marginRight:40,marginLeft:40}}

                                  />

                                  <Text style={{
                                      fontSize: 13,
                                      fontFamily: 'homa',
                                      color: '#545454',
                                      margin: 8,

                                  }}>{data.title1}</Text>
                                  </Body>
                                  <Thumbnail source={{uri: data.imageUrl}} style={{height: 200, width: 180, flex: 1}}/>

                              </ListItem>}>

                    </List>

                </Content>
                {/* slide show var */}

                <Button style={{
                    alignSelf: 'center',
                    position: 'absolute',
                    elevation: 4,
                    height: 70,
                    width: 70,
                    bottom: 0,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    borderRadius: 35,
                    backgroundColor: '#f5f5f5',
                    justifyContent: 'center'
                }} active>
                    <Thumbnail source={require('../img/magic.png')}/>
                </Button>


                <Footer>

                    <FooterTab style={{backgroundColor: '#4A91D3',}}>
                        <Button vertical onPress={() => this.props.navigation.navigate("Main")}>

                            <Text style={{fontSize: 22, color: 'black', fontFamily: 'homa', marginTop: 8}}>
                                <FontAwesome>{Icons.film}</FontAwesome>
                            </Text>

                            <Text style={{color: 'black', fontFamily: 'homa'}}> کارتون</Text>
                        </Button>


                        <Button vertical
                                onPress={() => this.props.navigation.navigate("Story")}
                        >
                            <Icon name="aperture" style={{color: 'black', marginTop: 8}}/>
                            <Text style={{color: 'black', fontFamily: 'homa'}}>داستان</Text>
                        </Button>

                        <Button onPress={() => this.props.navigation.navigate("Mosabeghe")}
                                style={{flex: 0, width: 70}}>
                            <Thumbnail source={require('../img/magic.png')}/>

                        </Button>

                        <Button vertical
                                onPress={() => this.props.navigation.navigate("majale")}>
                            <Icon style={{margin: 5, fontSize: 22, textAlign: 'left', color: 'black', marginTop: 10}}
                                  name={'book'}/>
                            <Text style={{color: 'black', fontFamily: 'homa'}}>مجله</Text>
                        </Button>


                        <Button vertical
                                onPress={() => this.props.navigation.navigate(" amoozesh")}>
                            <Text style={{fontSize: 22, color: 'black', fontFamily: 'homa', marginTop: 8}}>
                                <FontAwesome>{Icons.graduationCap}</FontAwesome>
                            </Text>
                            <Text style={{color: 'black', fontFamily: 'homa'}}>آموزش</Text>
                        </Button>

                    </FooterTab>

                </Footer>
            </Container>
</Root>

        );
    }
}

export default main
/*
export default TabNavigator(
   {


       Home: {
           screen:main,

       },
       Story: {
           screen: Story,

       },
       majale: {
           screen: majale,

       },
       amoozesh: {
           screen: amoozesh,

       },

   },

   {
       tabBarPosition: 'bottom',
       labelStyle: {
           fontSize: 15
       },
       animationEnabled: true,
       swipeEnabled: true,

       tabBarComponent: props => {

           return (

               <Footer >

                       <FooterTab style={{backgroundColor: '#FF8F00',}}>
                           <Button vertical onPress={() => props.navigation.navigate("Home")}>

                               <Text style={{fontSize: 22, color: 'black',fontFamily:'homa',marginTop:8}}>
                                   <FontAwesome>{Icons.film}</FontAwesome>
                               </Text>

                               <Text style={{color: 'black', fontFamily: 'homa'}}> کارتون</Text>
                           </Button>


                           <Button vertical
                                   onPress={() => props.navigation.navigate("Story")}
                           >
                               <Icon name="aperture" style={{color: 'black' ,marginTop:8}}/>
                               <Text style={{color: 'black', fontFamily: 'homa'}}>داستان</Text>
                           </Button>

                           <Button style={{width: 70,flex:0}} active>
                               <Icon active name="add" style={{color:'darkgrey'}}/>
                           </Button>

                           <Button vertical
                               onPress={() => props.navigation.navigate("majale")}>
                               <Icon style={{margin: 5, fontSize: 22, textAlign: 'left', color: 'black',marginTop:10}} name={'book'}/>
                               <Text style={{color: 'black', fontFamily: 'homa'}}>مجله</Text>
                           </Button>


                           <Button vertical
                                   onPress={() => props.navigation.navigate("amoozesh")}>
                               <Text style={{fontSize: 22, color: 'black',fontFamily:'homa',marginTop:8}}>
                                   <FontAwesome>{Icons.graduationCap}</FontAwesome>
                               </Text>
                               <Text style={{color: 'black', fontFamily: 'homa'}}>آموزش</Text>
                           </Button>

                       </FooterTab>

               </Footer>


           )

       }

   })

*/


