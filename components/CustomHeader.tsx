import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useCallback, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Appbar, Avatar, Text, TextInput, useTheme } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';


const CustomHeader = () => {
  const theme = useTheme();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const _handleProfile = () => console.log("profile clicked.")
  const _openModal = useCallback(() => {
    bottomSheetRef?.current?.present();
  }, []);

  return (
    <SafeAreaView>
      <BottomSheet ref={bottomSheetRef} />
      <Appbar.Header style={{backgroundColor: theme.colors.background }}>
          <Appbar.Content
            title={
              <View>
                <TouchableOpacity style={styles.heading} onPress={_openModal}>
                  <Avatar.Text size={35} label="FD" style={{ marginRight: 5 }} />
                  <View>
                    <Text style={{ color: theme.colors.secondary }}>Delivery name</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text variant='labelLarge' style={{ fontWeight: 'bold' }}>London</Text>
                      <Ionicons name="chevron-down" size={15} color={theme.colors.primary} style={{ marginTop: 5}}/>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            }
          />
          <Appbar.Action icon="account-outline" onPress={_handleProfile} color={theme.colors.primary}/>
      </Appbar.Header>
      <View
        style={{
          marginLeft: 15,
          marginRight: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 5,
          paddingBottom: 10
        }}
      >
        <TextInput
          mode='outlined'
          style={{ width: '90%', height: 40 }}
          contentStyle= {{ margin: 0 }}
          placeholder='Restaurants, groceries, dishes'
          outlineStyle={{ borderWidth: 0, backgroundColor: theme.colors.surface }}
          // value={text}
          // onChangeText={text => setText(text)}
        />
        <TouchableOpacity>
          <Ionicons name='options-outline' size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  header: {
    height: 50,
  },
  heading: {
    display: 'flex',
    flexDirection: "row"
  }
});

export default CustomHeader
