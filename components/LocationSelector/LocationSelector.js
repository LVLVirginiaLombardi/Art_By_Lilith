import * as Location from 'expo-location';

import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { COLORS } from '../../Constants/Colors';
import MapPreview from '../MapPreview/MapPreview';
import { useNavigation } from '@react-navigation/native';

const LocationSelector = ({onLocation, mapLocation}) => {
    const [pickedLocation, setPickedLocation] = useState();
    const navigation = useNavigation();

    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) {
            return
        }

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        });
        
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });
        
        onLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
    }

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Insufficient Permissions!',
                'You need to Grant Location',
                [{ text: 'OK' }]
            )
            return false;
        }
        return true
    }

    const handlePickOnMap = async() => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) {
            return
        }
        //navigation.navigate('Map')
    }

    useEffect(() => {
        if(mapLocation) {
            setPickedLocation(mapLocation)
            onLocation(mapLocation)
        }
    }, [mapLocation])

    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <Text>Location in process ...</Text>
            </MapPreview>
            <View style={styles.actions}>
                <Button 
                    title='Get Location'
                    color={COLORS.PEACH_PUFF}
                    onPress={handleGetLocation}
                />
                <Button
                    title='Select from Map'
                    color={COLORS.LIGTH_PINK}
                    onPress={handlePickOnMap}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    preview: {
        width: '90%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.BLUSH,
        borderWidth: 1,
        marginLeft: 15,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})

export default LocationSelector;