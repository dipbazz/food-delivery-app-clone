import { View, StyleSheet, ListRenderItem, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Divider, Text, useTheme } from 'react-native-paper'
import { MyTheme } from '../_layout';
import { useNavigation } from 'expo-router';
import categories from '@/assets/data/filter.json';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface ICategory {
  name: string;
  count: number;
  checked?: boolean;
}

const Filter = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const navigation = useNavigation();
  const [items, setItems] = useState<ICategory[]>(categories);
  const flexWidth = useSharedValue(0);
  const scale = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    width: flexWidth.value,
    transform: [{
      scale: scale.value
    }]
  }))

  const handleChecked = (item: ICategory) => {
    const updatedItems = items.map((value) => {
      if(value.name === item.name) {
        value.checked = !item.checked
      }
      return value
    })
    setItems(updatedItems);
  }

  const handleClearall = () => {
    const updatedItems = items.map((value) => {
      if(value.checked) {
        value.checked = !value.checked
      }
      return value
    })
    setItems(updatedItems);
  }

  useEffect(() => {
    const isSelected = !!items.find((item) => item.checked)
    flexWidth.value = withTiming(isSelected ? 150 : 0)
    scale.value = withTiming(isSelected ? 1 : 0);
  }, [items])

  const renderItem: ListRenderItem<ICategory> = ({ item }) => (
    <View key={item.name} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row'}}>
        <Text variant='labelLarge' style={{fontWeight: 'bold', marginRight: 10}}>{item.name}</Text>
        <Text variant='labelSmall'>({item.count})</Text>
      </View>
      <Checkbox
        status={item.checked ? 'checked' : 'unchecked'}
        onPress={() => handleChecked(item)}
      />
    </View>
  )
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterItemWrapper}>
        <View
          style={styles.filterItem}
        >
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='arrow-down' size={20} />
            <Text style={{fontWeight: 'bold'}}>Sort</Text>
          </View>
          <Feather name='chevron-right' size={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterItemWrapper}>
        <View
          style={styles.filterItem}
        >
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='fast-food-outline' size={20} />
            <Text style={{fontWeight: 'bold'}}>Hygiene rating</Text>
          </View>
          <Feather name='chevron-right' size={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterItemWrapper}>
        <View
          style={styles.filterItem}
        >
          <View style={{flexDirection: 'row', gap: 10}}>
            <Ionicons name='pricetag-outline' size={20} />
            <Text style={{fontWeight: 'bold'}}>Offers</Text>
          </View>
          <Feather name='chevron-right' size={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterItemWrapper}>
        <View
          style={styles.filterItem}
        >
          <View style={{flexDirection: 'row', gap: 10}}>
            <MaterialCommunityIcons name='food-apple-outline' size={20} />
            <Text style={{fontWeight: 'bold'}}>Diatery</Text>
          </View>
          <Feather name='chevron-right' size={20} />
        </View>
      </TouchableOpacity>

      <Text
        variant='headlineSmall'
        style={{
          marginVertical: 5,
          paddingTop: 5
        }}
      >
        Categories
      </Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        style={{
          backgroundColor: theme.colors.background,
          padding: 10,
          paddingBottom: 20
        }}
      />

      <View style={styles.footer}>
        <Animated.View style={animatedStyles}>
          <TouchableOpacity
            onPress={handleClearall}
          >
            <Button mode='outlined'>Clear all</Button>
          </TouchableOpacity>
        </Animated.View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flex: 1
          }}
        >
          <Button mode='contained'>Filter</Button>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const makeStyles = ({colors}: typeof MyTheme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.lightGray,
    paddingBottom: 90
  },
  filterItemWrapper: {
    backgroundColor: colors.background,
    marginBottom: 2
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    padding: 15,
    backgroundColor: colors.background,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center'
  }
})

export default Filter
