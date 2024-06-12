import { StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

type TDelivery = 'delivery' | 'pickup';

const BottomSheet = forwardRef<BottomSheetModal>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], []);
  const [value, setValue] = useState<TDelivery>('delivery')
  console.log(value);
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
        <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
          <Button onPress={() => setValue('delivery')}>Delivery</Button>
          <Button onPress={() => setValue('pickup')}>Pickup</Button>
        </View>
        <TouchableOpacity onPress={() => dismiss()}>
          <Button mode='contained'>Dismiss</Button>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheetModal>
  )
})

export default BottomSheet

const styles = StyleSheet.create({})
