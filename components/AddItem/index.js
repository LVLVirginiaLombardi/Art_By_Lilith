import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function AddItem(props) {

    const { textItem, onHandlerChangeItem, onHandlerAddItem } = props

    return (
        <View style={styles.screen}>
            <TextInput 
                placeholder='Write here...' 
                placeholderTextColor="#000"
                style={styles.input} 
                value={textItem}
                onChangeText={onHandlerChangeItem}  
            />
            <View style={styles.container}>
                <Button color={'#AD50A4'} title='Add' onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        color: 'black',
        fontSize: 18,
        backgroundColor: 'white',
    },
    container: {
        width: '20%',
        marginLeft: 20,
    },
})