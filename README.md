# react-native-geocode

transform a description of a location into geographic coordinates

## Installation

```sh
npm install react-native-geocode
```

## Usage

```js
import Geocode from "react-native-geocode";

// Intialize Gecodoer
Geocode.init("GMAPS-API-KEY");

// Or with options 
Geocode.init("GMAPS-API-KEY", {language : "en"});

// Geocode
Geocode.from("Colosseum").then(json => {
    var location = json.results[0].geometry.location;
    console.log(location);
}).catch(error => console.warn(error));

// Geocode from location
Geocoder.from(41.89, 12.49).then(json => {
    var addressComponent = json.results[0].address_components[0];
    console.log(addressComponent);
}).catch(error => console.warn(error));

// Geocode from latitude
Geocoder.from({
	latitude : 41.89,
	longitude : 12.49
});

// Geocode from latlng object
Geocoder.from({
	lat : 41.89,
	lng : 12.49
});

// Geocode from array
Geocoder.from([41.89, 12.49]);
```

## License

MIT
## Release Note


### 0.1.0

- Initial release