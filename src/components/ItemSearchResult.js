/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native';

export default class ItemSearchResult extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.IconMenu} activeOpacity={0.5}>
                    <Image
                        source={require('./images/ic_black_menu.png')}/>
                </TouchableOpacity>
                <View style={styles.container}>
                    <ImageBackground style={styles.ImageBackground} source={require('./images/slider1.jpg')}>
                    </ImageBackground>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 30,
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('./images/ic_calender.png')}
                            style={styles.ImageIcon}
                        />
                        <Text style={styles.textIcon}>
                            2019-01-20
                        </Text>
                        <Image
                            source={require('./images/ic_clock.png')}
                            style={styles.ImageIcon}
                        />
                        <Text style={styles.textIcon}>
                            1:10:22
                        </Text>
                        <Image
                            source={require('./images/ic_eye.png')}
                            style={styles.ImageIcon}
                        />
                        <Text style={styles.textIcon}>
                            493939
                        </Text>
                        <Image
                            source={require('./images/ic_tv.png')}
                            style={styles.ImageIcon}
                        />
                    </View>
                    <View>
                        <Text style={styles.textIcon}>
                            Youtube
                        </Text>
                    </View>


                    <ImageBackground style={styles.ImageBackground} source={require('./images/slider1.jpg')}>
                    </ImageBackground>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 30,
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('./images/ic_calender.png')}
                            style={styles.ImageIcon}
                        />
                        <Text style={styles.textIcon}>
                            2019-01-20
                        </Text>
                        <Image
                            source={require('./images/ic_clock.png')}
                            style={styles.ImageIcon}
                        />
                        <Text style={styles.textIcon}>
                            1:10:22
                        </Text>
                        <Image
                            source={require('./images/ic_eye.png')}
                            style={styles.ImageIcon}
                        />
                        <Text style={styles.textIcon}>
                            493939
                        </Text>
                        <Image
                            source={require('./images/ic_tv.png')}
                            style={styles.ImageIcon}
                        />
                    </View>
                    <View style={styles.textIcon}>
                        <Text>
                            Youtube
                        </Text>
                    </View>

                </View>
            </View>
        );
    }

    _fetchResults() {

    }
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#9352b3',
        opacity: 0.5
    },
    IconMenu: {
        height: 40,
        width: 40,
        marginTop: 10
    },
    container: {
        flex: 1,
        marginLeft: 40,
        marginRight: 40
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
        // backgroundColor: '#9352b3',
        height: 300,
        width: '70%',
    },


    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },
    ImageIcon: {
        height: 20,
        width: 20,
    },
    ImageBackground: {
        width: '100%',
        height: 180,
        marginTop: 50
    },
    textIcon: {
        color: '#846d6d',
        marginLeft: 5,
        marginRight: 5
    },
    textYoutube: {
        color: '#846d6d',
        marginTop: 10,
        flexDirection: 'row',
    },
});
