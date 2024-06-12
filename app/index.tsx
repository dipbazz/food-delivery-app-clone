import { View, Text } from 'react-native'
import React from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker'

const Page = () => {
  return (
    <View>
      <Text>Page</Text>
      <RNDateTimePicker value={new Date()} />
    </View>
  )
}

export default Page
