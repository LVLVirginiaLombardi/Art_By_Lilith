import { FlatList, Text } from 'react-native';

import PlaceItem from '../../components/PlaceItem/PlaceItem';
import React from 'react';
import { useSelector } from 'react-redux';

const PlaceListScreen = ({ navigation }) => {
    const places = useSelector(state => state.places.places)

    const renderItem = (data) => (
        <PlaceItem
            title={data?.item.title}
            image={data?.item.image}
            address={data?.item.address}
            onSelect={() => navigation.navigate('Detail', {
                placeID: data.item.id
            })}
        />
    )
    console.log(places, 'soy places')

    return (
        <>
        { places?.length > 0 ? (
                <FlatList
                    data={places}
                    renderItem={renderItem}
                    keyExtractor={(item) => Date.now()}
                />
            ) : (
                <Text>Not Places Found</Text>
            ) 
        }
        </>
    )
}

export default PlaceListScreen;