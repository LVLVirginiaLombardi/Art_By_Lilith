import { Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

import { COLORS } from '../../Constants/Colors';
import ImageSelector from '../../components/ImageSelector/ImageSelector';
//import LocationSelector from '../../components/LocationSelector/LocationSelector';
import { addPlace } from '../../store/Actions/PlaceAction/place.action';
import { useDispatch } from 'react-redux';

const NewPlaceScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    //const [location, setLocation] = useState(null);
    const handleTitleChange = text => setTitle(text)

    const handleSave = () => {
        dispatch(addPlace(title, image));
        navigation.navigate('Address');
    }

    return (
        <ScrollView style={{ flex: 1}} scrollEnabled>
                <Text style={styles.label}>TITLE</Text>
                <TextInput 
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}    
                />
                <ImageSelector onImage={image => setImage(image)} />
                <Button title='Record Address' color={COLORS.MAROON} onPress={handleSave}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'RobotoMedium',
        marginBottom: 10,
        marginLeft: 30,
        marginTop: 30,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 20,
        width: '90%',
        marginLeft: 13,
    },
})

export default NewPlaceScreen;