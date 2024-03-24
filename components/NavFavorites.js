import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setDestination, setOrigin } from '../slices/navSlice'

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: '135 Langdon St, Madison, WI',
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'Buffalo Wild Wings, Madison, WI',
    },
    {
        id: '678',
        icon: 'heart',
        location: 'Jenna',
        destination: '1830 North Milwaukee Ave, Chicago, IL',
    },
]

const NavFavorites = () => {

  return (
    <FlatList 
        style={tw`h-100`}
        ItemSeparatorComponent={() => {
            return (
                <View style={[tw`bg-gray-200`, {height: 0.5}]} />
            )
        }}
        data = {data}
        keyExtractor={(item) => item.id}
        renderItem={({item: {location, destination, icon}}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`} >
                <Icon 
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    color='white'
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>{location}</Text>
                    <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFavorites

const styles = StyleSheet.create({})