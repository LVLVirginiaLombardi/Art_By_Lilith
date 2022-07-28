import 'react-native-gesture-handler';

import { useEffect, useState } from 'react';

import AppLoading from 'expo-app-loading';
import ShopNavigator from './Navigation/ShopNavigator/ShopNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  
  const [loaded] = useFonts({
    RobotoThin: require('./assets/Fonts/Roboto-Thin.ttf'),
    RobotoLight: require('./assets/Fonts/Roboto-Light.ttf'),
    RobotoRegular: require('./assets/Fonts/Roboto-Regular.ttf'),
    RobotoMedium: require('./assets/Fonts/Roboto-Medium.ttf'),
    RobotoBold: require('./assets/Fonts/Roboto-Bold.ttf'),
    RobotoBlack: require('./assets/Fonts/Roboto-Black.ttf'),
  });
  
  /*const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  if(!loaded) return <AppLoading/>

  const onHandlerChangeItem = (text) => setTextItem(text)
  const onHandlerAddItem = () => {
    console.log('se agrego el item', textItem)
    setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem, completed: false}])
    setTextItem('')
  }

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }
  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id))
    setModalVisible(!modalVisible)
  }

  const onHandlerCompleteItem = id => {
    let itemCompleted = itemList.findIndex((item) => item.id === id)
    itemList[itemCompleted].completed = true
    setItemList([...itemList])
    setModalVisible(!modalVisible)
  }*/
    
  return (
      <ShopNavigator/>
    /*<ImageBackground source={backgroundimage} style={styles.backgroundimage}>
      <View style={styles.screen}>
        <CustomModal 
          modalVisible={modalVisible}
          onHandlerDeleteItem={onHandlerDeleteItem}
          itemSelected={itemSelected}
          onHandlerCompleteItem={onHandlerCompleteItem}
        /> 
        <AddItem 
          textItem={textItem}
          onHandlerAddItem={onHandlerAddItem}
          onHandlerChangeItem={onHandlerChangeItem}
        />
        <List 
          itemList={itemList}
          onHandlerModal={onHandlerModal}
        />
      </View>
    </ImageBackground>*/
  );
}
