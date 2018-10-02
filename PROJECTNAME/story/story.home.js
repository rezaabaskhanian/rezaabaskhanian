import React, {Component} from 'react';
import {StyleSheet,Image} from 'react-native'
import {Container, Header, Content, List, ListItem, Text,Thumbnail,Body,Right,Button,Left,Title} from 'native-base';
import StarRating from 'react-native-star-rating';
import FontAwesome, {Icons} from 'react-native-fontawesome';


const data = [
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/anime1.jpg",
        title: "انیمیشن",
        rating:'امتیاز:',
        title1:'ششسیلشلشکبیلاشی لاشمینسبلایمن مبامسین ایبلبمنیسالسمن نیابمنسال '
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/kootah1.jpg",
        title: "انیمیشن کوتاه",
        rating:'امتیاز:',
        title1:'ششسیلشلشکبیلاشی لاشمینسبلایمن مبامسین ایبلبمنیسالسمن نیابمنسال '
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/SERIALI1.jpg",
        title: "کارتون های سریالی",
        rating:'امتیاز:',
        title1:'ششسیلشلشکبیلاشی لاشمینسبلایمن مبامسین ایبلبمنیسالسمن نیابمنسال '
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/irani-final.jpg",
        title: "کارتون های ایرانی",
        rating:'امتیاز:',
        title1:'ششسیلشلشکبیلاشی لاشمینسبلایمن مبامسین ایبلبمنیسالسمن نیابمنسال '
    },
    {
        imageUrl: "https://www.barenaghola.com/upload/cat-animation/old-(1).jpg",
        title: "کارتون های قدیمی",
        rating:'امتیاز:',
        title1:'ششسیلشلشکبیلاشی لاشمینسبلایمن مبامسین ایبلبمنیسالسمن نیابمنسال '
    },

];
export default class Story extends Component {

    constructor(props) {
        super(props);
        this.state = {
            starCount: 2.5
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#4A91D3'}}>

                    <Left  style={{flexDirection:'row' }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Text style={{margin: 5, fontSize: 27, textAlign: 'left', color: 'white'}}>
                                <FontAwesome>{Icons.book}</FontAwesome>

                            </Text>

                        </Button>
                    </Left>

                    <Body>
                    <Title style={{fontSize: 25,marginLeft: 40 ,fontFamily:'homa'}}>داستان </Title>

                    </Body>
                    <Right>

                        <Button transparent onPress={() => this.props.navigation.goBack()} >
                            <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: 'white'}}>
                                <FontAwesome>{Icons.arrowLeft}</FontAwesome>

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
            </Container>
        );
    }
}