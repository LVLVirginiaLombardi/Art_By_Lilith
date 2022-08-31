import 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';
import MainNavigator from './Navigation/MainNavigator/MainNavigator';
import { Provider } from 'react-redux';
import { init } from './db/Index/Index';
import store from './store/index';
import { useFonts } from 'expo-font';

init()
  .then(() => console.log('database initialized'))
  .catch((err) => {
    console.log('database fail connect')
    console.log(err.message)
  });

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
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
