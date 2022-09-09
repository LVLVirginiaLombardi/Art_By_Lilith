import * as addressAction from '../../store/Actions/PlaceAction/place.action';

import { FlatList, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PlaceItem from '../../components/PlaceItem/PlaceItem';

const PlaceListScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const places = useSelector(state => state.places.places)

    const renderItem = (data) => (
        <PlaceItem
            id={data.item.id}
            title={data.item.title}
            image={data.item.image}
            address={data.item.address}
            onSelect={() => navigation.navigate('Detail', {
                placeID: data.item.id
            })}
        />
    )

    useEffect(() => {
        dispatch(addressAction.loadAddress())
    }, [])

    return (
        <>
        { places?.length > 0 ? (
                <FlatList
                    data={places}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <Text>Not Places Found</Text>
            ) 
        }
        </>
    )
}

export default PlaceListScreen;