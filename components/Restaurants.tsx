import { ScrollView, View } from 'react-native'
import React from 'react'
import restaurants from "@/assets/data/restaurants.json";
import { Avatar, Card, Divider, Text, useTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const Restaurants = () => {
  const theme = useTheme();
  return (
    <ScrollView horizontal style={{padding: 15}}>
      {restaurants?.map((restaurant) => (
        <Card
          key={restaurant.id}
          mode='contained'
          style={{
            width: 250,
            marginRight: 15,
            borderRadius: 2,
            backgroundColor: theme.colors.background,
          }}
        >
          <Card.Cover
            source={{
              uri: restaurant.image
            }}
            style={{
              height: 250,
              borderRadius: 2
            }}
          />
          <Card.Title
            title={restaurant.name}
            subtitle={(
              <View style={{flexDirection: 'row', gap: 5}}>
                <Ionicons name='star' color={theme.colors.secondary}/>
                <Text style={{color: theme.colors.secondary}}>
                  {restaurant.rating} ({restaurant.reviewCount})
                </Text>
                <Text style={{color: theme.colors.secondary}}>|</Text>
                <Text style={{color: theme.colors.secondary}}>{restaurant.cuisine}</Text>
              </View>
            )}
            titleStyle={{
              fontWeight: 'bold'
            }}
          />
          {/* <Card.Content>
            <Text>{category.description}</Text>
          </Card.Content> */}
        </Card>
      ))}
    </ScrollView>
  )
}

export default Restaurants
