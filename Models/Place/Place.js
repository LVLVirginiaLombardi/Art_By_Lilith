class Place {
    constructor(id, title, image, address, lat, lng) {
        this.title = title;
        this.image = image;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
        this.id = id.toString();
    }
}

export default Place;