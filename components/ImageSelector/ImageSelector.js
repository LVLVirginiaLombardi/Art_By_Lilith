import * as ImagePicker from 'expo-image-picker';

import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { COLORS } from '../../Constants/Colors';
import OutlinedButton from '../../UI/OutlinedButton/OutlinedButton';

const ImageSelector = props => {
    const [pickedUri, setPickedUri] = useState();

    const veryPermission = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'No permissons for using the camera',
                'You need to give permissions to access the camera',
                [{ text: 'Ok' }]
            )
            return false
        }
        return true
    }

    const handlerTakeImage = async () => {
        const isCameraOk = await veryPermission();
        if (!isCameraOk) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        });

        setPickedUri(image.uri)
        props.onImage(image.uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri ? (<Text style={styles.text}>No Image Taken Yet...</Text>) : 
                (<Image 
                    style={styles.image}
                    source={{ uri: pickedUri }}
                />)}
            </View>
            <OutlinedButton icon={"camera"} onPress={handlerTakeImage}>Take Your Image</OutlinedButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    preview: {
        width: '90%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: COLORS.BLUSH,
        borderWidth: 1,
        marginLeft: 18,
        borderRadius: 15,
    },
    text: {
        
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
})

export default ImageSelector;