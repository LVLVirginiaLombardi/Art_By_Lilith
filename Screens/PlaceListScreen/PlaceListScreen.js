import { FlatList, ImageBackground, StyleSheet, Text } from 'react-native';

import { COLORS } from '../../Constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import PlaceItem from '../../components/PlaceItem/PlaceItem';
import { useSelector } from 'react-redux';

const backgroundImage = require("../../assets/Drawings/Lonely.jpeg");


const PlaceListScreen = ({ navigation }) => {

    const places = useSelector(state => state.places.places)

    const renderItem = (data) => (
        <PlaceItem
            id={data.item.id}
            title={data.item.title}
            image={data.item.image}
            onSelect={() => navigation.navigate('Detail', {
                placeID: data.item.id
            })}
        />
    )

    return (
        <ImageBackground source={backgroundImage} style={styles.back}>
            <>
            { places?.length > 0 ? (
                    <FlatList
                        data={places}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                        <Text style={styles.text}>
                            Pictures Not Found...
                            <Ionicons name={"close-circle"} size={26}/>
                        </Text>
                ) 
            }
            </>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    back: {
        resizeMode: "cover",
        width: '100%',
        height: '100%',
    },
    text: {
        marginTop: '30%',
        marginLeft: '26%',
        fontSize: 20,
        fontFamily: 'RobotoMedium',
        color: COLORS.platinum
    }
});

export default PlaceListScreen;