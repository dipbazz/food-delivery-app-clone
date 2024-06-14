import { ScrollView } from 'react-native'
import React from 'react'
import categories from "@/assets/data/home.json";
import { Card, useTheme } from 'react-native-paper';

const Categories = () => {
  const theme = useTheme();
  return (
    <ScrollView horizontal style={{padding: 15}}>
      {categories?.map((category) => (
        <Card
          key={category.id}
          mode='contained'
          style={{
            width: 150,
            marginRight: 15,
            borderRadius: 2,
            backgroundColor: theme.colors.background,
          }}
        >
          <Card.Cover
            source={{
              uri: category.picture
            }}
            style={{
              height: 100,
              borderRadius: 2
            }}
          />
          <Card.Title
            title={category.name}
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

export default Categories
