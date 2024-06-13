import { Stack } from 'expo-router';
import 'react-native-reanimated';
import CustomHeader from '@/components/CustomHeader';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export const MyTheme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    lightGray: "#f1f1f0"
  },
};

export default function RootLayoutNav() {
  return (
    <GestureHandlerRootView>
      <PaperProvider theme={MyTheme}>
        <BottomSheetModalProvider>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                header: () => <CustomHeader />
              }}
            />
            <Stack.Screen
              name="(modal)/filter"
              options={{
                presentation: 'modal',
                headerTitle: 'Filter',
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: MyTheme.colors.background
                }
              }}
            />
            <Stack.Screen
              name="(modal)/location-search"
              options={{
                presentation: 'modal',
                headerTitle: 'Location Search',
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: MyTheme.colors.background
                }
              }}
            />
          </Stack>
        </BottomSheetModalProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
