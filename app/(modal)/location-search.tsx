import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { Button } from 'react-native-paper'
import { useNavigation } from 'expo-router'

const LocationSearch = () => {
  const navigation = useNavigation();
  const [location, useLocation] = useState({
    latitude: 51.9876767,
    longitude: -0.8877321,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02
  })

  return (
    <View style={{flex: 1, zIndex: 1000}}>
      <MapView style={{flex: 1}} showsUserLocation />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          padding: 10
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Button
            elevation={5}
            mode='contained'
            style={{paddingVertical: 6}}
          >
            CONFIRM
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default LocationSearch
