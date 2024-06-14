import { View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Categories from '@/components/Categories'
import Restaurants from '@/components/Restaurants'
import { Text } from 'react-native-paper'

const Page = () => {
  return (
    <View>
      <ScrollView>
        <Categories />
        <Text
          variant='titleMedium'
          style={{
            marginLeft: 20,
            marginTop: 10,
            fontWeight: 'bold'
          }}
        >Top picks in your neighbourhood</Text>
        <Restaurants />
      </ScrollView>
    </View>
  )
}

export default Page
