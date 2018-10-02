import React,{Component} from "react";
import {Image,View,Animated,Text,StyleSheet,} from  'react-native';
import {Thumbnail} from 'native-base'

export default class slpash extends Component {

componentDidMount(){
    setTimeout(()=>{
        this.props.navigation.navigate('Main');
        },3 )

}

    render(){
        return(
            <View style={styles.stretch}>


                <Image
                    style={{width: 300, height: 300, borderRadius: 150/2}}
                    source={require('../img/pg.gif')}
                />

            </View>


        )
    }
}

const styles = StyleSheet.create({
    stretch: {
        flex:1,

alignItems:'center',
 justifyContent:'center',

backgroundColor:'#d1d1d1'

    }
});