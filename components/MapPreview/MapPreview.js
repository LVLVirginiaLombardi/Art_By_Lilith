import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { API_MAPS_KEY } from '../../Constants/DataBase/DataBase';
import React from 'react';

const MapPreview = (props) => {
    let mapPreviewUrl;

    if(props.location) {
        mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props?.location.lat},${props?.location.lng}&zoom=15&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${props?.location.lat},${props?.location.lng}&markers=color:green%7Clabel:G%7C${props?.location.lat},${props?.location.lng}&markers=color:red%7Clabel:C%7C${props?.location.lat},${props?.location.lng}&key=${API_MAPS_KEY}`;
    }
    console.log(props.location)
    console.log(mapPreviewUrl)
    return (
        <TouchableOpacity onPress={props.onPress} style={{ ...styles.mapPreview, ...props.style }}>
            {props.location ? 
            (
                <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} /> 
            ) : (
                (props.children)
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    mapImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
});

export default MapPreview;