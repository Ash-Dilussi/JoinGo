import React from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from "@env";


const SelectOptionCard = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const getTravelInfo = async () => {

        if (origin && destination) {

            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
            .then(response => {return response.json()})
                .then(data => {
                    
                    console.log(Json.parse(data))
                })
        }
    }
    return (
        <View style={tw`m-3`}>


            <TouchableOpacity
                style={tw`mt-30 mx-30`}
                onPress={getTravelInfo}>
                <Text style={tw` text-lg font-semibold`}>Get a Ride</Text>
                <Icon
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign" />
            </TouchableOpacity>
        </View>
    )
}

export default SelectOptionCard