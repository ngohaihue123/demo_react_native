/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import { Icon } from '../../images/ic_search.png';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    TextInput,
    Image,
    ImageBackground
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class SearchPage extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground style={styles.ImageBackground} source={require('./images/slider1.jpg')}
                             style={{width: '100%', height: '100%'}}>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.SearchStyle} activeOpacity={0.5}>
                    <Image
                        source={require('./images/ic_menu.png')}
                    />
                </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={{
                        flexDirection: 'row', backgroundColor: '#9352b3', width: '90%', height: 50, borderRadius: 10,
                    }}>

                        <TextInput

                            placeholder="Search here..."

                            underlineColorAndroid='transparent'

                            style={styles.TextInputStyleClass}/>
                        <TouchableOpacity style={styles.SearchStyle} activeOpacity={0.5}
                                          onPress={() => navigate('ItemSearchResult')}>
                            <Image
                                source={require('./images/ic_search.png')}
                                style={styles.ImageIconStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }

    _fetchResults() {

    }
}
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    TextInputStyleClass: {

        textAlign: 'center',
        height: 50,
        width: '80%',
        backgroundColor: "#FFFFFF",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },


    SearchStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 50,
    },
    Logo: {
        alignSelf: 'flex-end',
        marginTop: -5,
        position: 'absolute',
        height: '10%',
        width: '10%',
    },


    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },

    ImageBackground: {
        backgroundColor: '#9352b3',
        opacity: 0.3
    }
});
