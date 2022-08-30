import PlaceForm from "../../components/PlaceForm/PlaceForm";

const AddPlace = ({navigation}) => {

    const createPlaceHandler = (place) => {
        navigation.navigate('Address', {
            place: place
        });
    }

    return (
        <PlaceForm 
        onCreatePlace={createPlaceHandler}
        />
    )
}

export default AddPlace;