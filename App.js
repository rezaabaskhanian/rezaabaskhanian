import React, {Component} from 'react'
import {Text, Image, View, StyleSheet, Button} from 'react-native'
import {Thumbnail} from 'native-base'


export default class register extends Component {
    render() {
        return (


            <View style={styles.container}>


                <View style={styles.box1}>
                </View>
                <View style={styles.box2}>
                    <View style={styles.cornerLeft}/>
                    <View style={styles.cornerRight}/>

                    <Image style={styles.image} source={require('./img/ara1.jpg')}/>
                </View>


                <View style={styles.boxtext}>
                    <Text style={styles.text1}>
                        سالن زیبایی مریم ريوف
                    </Text>
                    <Thumbnail style={styles.icon} source={require('./img/hu.png')}/>
                </View>



                <View style={styles.boxtext1}>
                    <Text style={styles.text2}>
                        لیست سفارشات
                    </Text>
                </View>



                <View style={styles.boxtext3}>
                    <Text style={styles.text3}>
                        کوتاهی مو 11:30 تا 12:30
                    </Text>
                    <Text style={styles.text3}>
                        برنجی 45،000 ریال
                    </Text>


                </View>
                <View style={styles.boxtext3}>
                    <Text style={styles.text3}>
                        پوست 11:30 تا 12:30
                    </Text>
                    <Text style={styles.text3}>
                        برنجی 45،000 ریال
                    </Text>



                </View>
                <View style={styles.cornerLeft1}/>
                <View style={styles.cornerRight1}/>
                <View style={styles.inputWrap}>
                </View>

                <View style={styles.boxtextfoot1}>
                    <Text style={styles.foottext}>
                        هزینه کل
                    </Text>
                    <Text style={styles.foottxt2}>
                        90,000 هزارتومن
                    </Text>
                </View>


                <View style={styles.boxtextfoot2}>
                    <Text style={styles.foottext}>
                        کد رزرو
                    </Text>
                    <Text style={styles.foottxt2}>
                        868585
                    </Text>
                </View>


                <View style={styles.scopeicon}>
                    <Thumbnail style={styles.icon} source={require('./img/pt.png')}/>
                </View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEF6F3'
    },
    box1: {
        position: 'absolute',

        marginLeft: '3%',
        width: '95%',
        height: '80%',
        backgroundColor: '#FFEEE9'
    },
    box2: {
        position: 'absolute',
        top: '3%',
        left: '8%',
        width: '80%',
        height: '60%',


    },
    image: {
        top: '3%',
        left: '8%',
        width: '89%',
        height: '60%',
        borderRadius: 30
    },

    cornerLeft: {

        position: 'absolute',
        marginTop: '5%',
        height: '10%',
        width: '10%',
        left: '-10%',

        borderColor: 'transparent',
        borderRadius: 20,
        backgroundColor: '#FEF6F3',


    },
    cornerRight: {

        position: 'absolute',
        marginTop: '5%',

        height: '10%',
        width: '10%',
        right: '-15%',

        borderColor: 'transparent',
        borderRadius: 20,
        backgroundColor: '#FEF6F3',

    },
    boxtext: {
        flexDirection: 'row',
        top: '15%'
    },
    text1: {
        fontSize: 18,
        right: '60%',
        top: '2%'
    },
    icon: {
        left: '80%',
        top: '-1%'
    },
    boxtext1: {
        top: '8%'
    },
    text2: {
        fontSize: 15,
        right: '30%',

    },
    boxtext3: {
        flexDirection: 'row',
        top: '15%'
    },
    text3: {
        fontSize: 10,
        paddingLeft: '15%',

    },


    inputWrap: {
        paddingLeft: '35%',
        paddingRight: '35%',
        flexDirection: "row",
        marginTop: '1%',
        top: '22%',
        borderBottomWidth: 2,
        borderBottomColor: "#CCC"
    },

    cornerLeft1: {

        position: 'absolute',
        top: '65%',
        height: 40,
        width: 40,
        left: '-2%',

        borderColor: 'transparent',
        borderRadius: 20,
        backgroundColor: '#FEF6F3',


    },
    cornerRight1: {

        position: 'absolute',

        top: '65%',
        height: 40,
        width: 40,
        right: '-2%',

        borderColor: 'transparent',
        borderRadius: 20,
        backgroundColor: '#FEF6F3',

    },

    boxtextfoot1: {
        flexDirection: 'row',

        top: '30%',
        right: 20,
    },
    foottext: {
        fontSize: 18,

        paddingLeft: 50,


    },
    foottxt2: {

        paddingLeft: 50,
        left: 60
    },
    boxtextfoot2: {
        flexDirection: 'row',

        top: '30%',
        right: 40,
    },

    scopeicon: {
        left: '65%',
        position: 'absolute',
        bottom: '5%'

    }

});