import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import tw from 'twrnc';
import Map from '../Components/Map';
import MapView from 'react-native-maps';

const MapScreen=()=>{

  return(
    <View>
      <Text>
        MapScreen </Text>

        <View style = {tw ` h-1/2`}>
        <Map/>
        </View>


        <View style = {tw `h-1/2`}>
        <Text>Details</Text>
        </View>
        
     
    </View>
  )
}


export default MapScreen 

const styles = StyleSheet.create({

})