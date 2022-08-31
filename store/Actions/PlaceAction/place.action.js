import * as FileSystem from 'expo-file-system';

import { fetchAddress, insertAddress } from '../../../db/Index/Index';

//import { API_MAPS_KEY } from '../../constants/DataBase';

export const ADD_PLACE = 'ADD_PLACE';
export const LOAD_PLACES = 'LOAD_PLACES';

export const addPlace = (title, image, address) => {
    return async dispatch => {

        /*const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_MAPS_KEY}`);

        if(!response.ok) throw new Error('It was not possible to connect with Google Maps API')

        const resData = await response.json();
        if(!resData.results) throw new Error('It was not possible to obtain de Address')

        const address = resData.results[0].formatted_address;
        console.log(address)*/

        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path
            })

            const result = await insertAddress(
                title,
                Path,
                address
            )

            dispatch({ type: ADD_PLACE, payload: { 
                id: result.insertId,
                title, 
                image: Path, 
                address
            }})

        } catch (error) {
            console.log(error.message)
            throw error
        }
    }
}

export const loadAddress = () => {
    return async dispatch => {
        try {
            const result = await fetchAddress()
            console.log(result)
            dispatch({ type: LOAD_PLACES, places: result.rows._array})
        } catch (error) {
            console.log(error.message)
            throw error
        }
    }
}