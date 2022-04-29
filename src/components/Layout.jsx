import React from 'react'
import { Text, View } from 'react-native'
import Navbar from './Navbar'

export default function Layout({children})
{
    return(
        <View>
            <Navbar/>
            {children}
        </View>
    )    
}