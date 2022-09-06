import { Image, StyleSheet, View } from 'react-native';

import { API_MAPS_KEY } from '../../Constants/DataBase/DataBase';
import React from 'react';

const MapPreview = props => {
    const mapPreviewUrl = props.location
        ? `https://maps.googleapis.com/maps/api/staticmap?center=${props?.location.lat},${props?.location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${props?.location.lat},${props?.location.lng}&markers=color:green%7Clabel:G%7C${props?.location.lat},${props?.location.lng}&markers=color:red%7Clabel:C%7C${props?.location.lat},${props?.location.lng}&key=${API_MAPS_KEY}`
        : '';

    return (
        <View style={{...styles.mapPreview, ...props.style}}>
            {props.location 
            ?   
            <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} /> 
            : 
            (props.children)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: '100%',
        height: '100%',
    },
})

export default MapPreview;