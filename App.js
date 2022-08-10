import 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import MainNavigator from './Navigation/MainNavigator/MainNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  
  const [loaded] = useFonts({
    RobotoThin: require('./assets/Fonts/Roboto-Thin.ttf'),
    RobotoLight: require('./assets/Fonts/Roboto-Light.ttf'),
    RobotoRegular: require('./assets/Fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('./assets/Fonts/Roboto-Medium.ttf'),
    RobotoBold: require('./assets/Fonts/Roboto-Bold.ttf'),
    RobotoBlack: require('./assets/Fonts/Roboto-Black.ttf'),
  })

  if(!loaded) return <AppLoading />
  
  return (
      <MainNavigator/>
  );
}
