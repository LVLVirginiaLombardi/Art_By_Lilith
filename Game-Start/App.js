import { SafeAreaView, StyleSheet, View } from 'react-native';

import FirstScreen from './pages/FirstScreen';
import Header from './components/Header';
import SecondScreen from './pages/SecondScreen';
import { useFonts } from 'expo-font'
import { useState } from 'react';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const [loaded] = useFonts({ EduBold: require('./assets/fonts/Edu-Bold.ttf') , EduRegular: require('./assets/fonts/Edu-Regular.ttf'), EduMedium: require('./assets/fonts/Edu-Medium.ttf'), EduSemiBold: require('./assets/fonts/Edu-SemiBold.ttf')})

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <SecondScreen onStartGame={handlerStartGame} />

  if (userNumber) {
    content = <FirstScreen />
  } 

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Guess the number'} />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
