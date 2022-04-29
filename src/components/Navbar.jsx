import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import NavigationBar from 'react-native-navigation-bar';
import Logo from "../images/Logo.png"

export default function Navbar()
{
    return(
        <View style={styles.nav}>
            <Image source={Logo}/>
            <NavigationBar title="Textige" height={100}/>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        display: ""
    }
})