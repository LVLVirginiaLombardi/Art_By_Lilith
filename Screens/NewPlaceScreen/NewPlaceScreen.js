import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

import { COLORS } from '../../Constants/Colors';
import ImageSelector from '../../components/ImageSelector/ImageSelector';
import OutlinedButton from '../../UI/OutlinedButton/OutlinedButton';
import { addPlace } from '../../store/Actions/PlaceAction/place.action';
import { useDispatch } from 'react-redux';

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState();
   
    const handleTitleChange = text => setTitle(text)

    const handlePickImage = (uri) => {

    }

    const handleSave = () => {
        dispatch(addPlace(title, image));
    }
    

    return (
        <ScrollView style={{ flex: 1}} scrollEnabled>
                <Text style={styles.label}>YOUR DRAWING PIC TITLE:</Text>
                <TextInput 
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}    
                />
                <ImageSelector onImage={handlePickImage} />
                <OutlinedButton 
                    icon={'save'} 
                    onPress={handleSave}
                >
                    Record Your Pic 
                </OutlinedButton>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'RobotoRegular',
        marginBottom: 10,
        marginLeft: 30,
        marginTop: 30,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        marginBottom: 20,
        width: '90%',
        marginLeft: 13,
    },
})

export default NewPlaceScreen;