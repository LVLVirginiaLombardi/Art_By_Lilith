import * as ImagePicker from 'expo-image-picker';

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { COLORS } from '../../Constants/Colors';

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
                {!pickedUri ? (<Text>No image selected</Text>) : (<Image 
                    style={styles.image}
                    source={{ uri: pickedUri }}
                    />)}
            </View>
            <Button 
                style={styles.buttonPicture}
                title='Take a picture'
                color={COLORS.LIGTH_PINK}
                onPress={handlerTakeImage}
            />
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
        marginLeft: 15,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    buttonPicture: {
        width: '80%',
    },
})

export default ImageSelector;