import { API_MAPS_KEY } from '../../Constants/DataBase/DataBase';

export function getMapPreview(lat, lng) {

    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${API_MAPS_KEY}`;

    return imagePreviewUrl;
}