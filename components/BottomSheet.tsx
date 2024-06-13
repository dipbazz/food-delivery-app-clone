import { StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { MyTheme } from '@/app/_layout';

type TDelivery = 'delivery' | 'pickup';

const BottomSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const snapPoints = useMemo(() => ['40%'], []);
  const [value, setValue] = useState<TDelivery>('delivery')
  const theme = useTheme();
  const styles = makeStyles(theme)
  const { dismiss } = useBottomSheetModal();
  const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />, [])

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ borderRadius: 0}}
      handleIndicatorStyle={{ display: 'none'}}
      // onChange={handleSheetChanges}
    >
      <BottomSheetView style={{ padding: 10, paddingTop: 0, flex: 1 }}>
        <View style={{flexDirection: 'row', gap: 10, justifyContent: 'center', marginBottom: 10}}>
          <TouchableOpacity style={[styles.chip, value === "delivery" ? styles.activeChip : styles.inactiveChip]} onPress={() => setValue('delivery')}>
            <Text>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chip, value === "pickup" ? styles.activeChip : styles.inactiveChip]} onPress={() => setValue('pickup')}>
            <Text>Pickup</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 15}}>
          <View style={{marginBottom: 10}}>
            <TextInput
              label="Current location"
              mode='outlined'
            />
          </View>
          <View>
            <TextInput
              label="Arrival time"
              mode='outlined'
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => dismiss()}>
          <Button mode='contained'>Dismiss</Button>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheetModal>
  )
})

export default BottomSheet


const makeStyles = ({ colors }: typeof MyTheme ) => StyleSheet.create({
  chip: {
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  activeChip: {
    backgroundColor: colors.surfaceVariant,
  },
  inactiveChip: {
    backgroundColor: colors.background
  }
})
