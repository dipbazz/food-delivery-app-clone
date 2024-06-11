import { Stack } from 'expo-router';
import 'react-native-reanimated';
import CustomHeader from '@/components/CustomHeader';
import { DefaultTheme, PaperProvider } from 'react-native-paper';


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function RootLayoutNav() {

  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />
          }}
        />
      </Stack>
    </PaperProvider>
  );
}
