import { ADD_PLACE, LOAD_PLACES } from '../../Actions/PlaceAction/place.action';

import Place from '../../../Models/Place/Place';

const initialState = {
    places: []
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                new Date().toString() + Math.random().toString(),
                action.payload.title,
                action.payload.image,
                action.payload.address,
                action.payload.lat,
                action.payload.lng
            );
            //{ id: action.payload.id.toString(), title: action.payload.title, image: action.payload.image, address: action.payload.address, lat: action.payload.lat, lng: action.payload.lng }
            return {
                ...state,
                places: state.places.concat(newPlace),
                //[...state.places, newPlace]
            };
        case LOAD_PLACES:
            return {
                ...state,
                places: action.places.map(item => (
                    {   id: item.id.toString(),
                        title: item.title,
                        image: item.image,
                        address: item.address,
                        lat: item.lat,
                        lng: item.lng
                    }
                ))
            }
        default:
            return state
    }
}