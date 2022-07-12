import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function List(props) {

    const { itemList, onHandlerModal } = props
    
    console.log(itemList)
    
    return (
        <FlatList 
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
                    <Text style={{textDecorationLine: data.item.completed ? 'underline line-through' : null}}>{data.item.value}</Text>
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 13,
        marginTop: '25%',
        width: '80%',
        height: 50,
        padding: 10,
        backgroundColor: 'white',
    }
})
