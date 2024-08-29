import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import tw from 'twrnc';
import Map from '../Components/Map';

const MapScreen=()=>{

  return(
    <View>
      <Text>
        MapScreen
        <View style = {tw ` h-1/2`}>
        <Map/>
        </View>
        
      </Text>
    </View>
  )
}


export default MapScreen 

const styles = StyleSheet.create({

})