import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc'
import NavOptions from '../Components/NavOptions'

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`p-4 android:pt-2 bg-white dark:bg-black`}>
            <Text style={[tw`text-2xl text-black p-10`]}>Join Trip</Text>
            <NavOptions/>
            </SafeAreaView>
    )
}


export default HomeScreen


const styles = StyleSheet.create({

    text: {
        color: "blue",
    }
})