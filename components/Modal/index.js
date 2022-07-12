import { Button, Modal, StyleSheet, Text, View } from 'react-native'

export default function CustomModal(props) {

    const { modalVisible, itemSelected, onHandlerDeleteItem, onHandlerCompleteItem } = props

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.modal}>
                <View style={styles.modalView}>
                    <View style={styles.modalTitle}>
                        <Text>
                            What do you want to do? :)
                        </Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text>Do you want to erase the item or check as done?</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalItem}>{itemSelected.value}</Text>
                    </View>
                    <View style={styles.modalButton}>
                        <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Accept' />
                        <Button onPress={() => onHandlerCompleteItem(itemSelected.id)} title='Done' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },  
    modalView: {
        backgroundColor: '#AD50A4',
        opacity: 0.7,
        width: '80%',
        height: '50%',
        borderRadius: 15,
        padding: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
    },
    modalTitle: {
        color: 'white',
        fontSize: 18,
    },
    modalMessage: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButton: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '80%',
    },
    modalItem: {
        fontSize: 30,
    }
})