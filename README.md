# react-native-geocode

[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)
![issues tracker](https://img.shields.io/github/issues/bizzarrowebgroup/react-native-geocode)
![license](https://img.shields.io/github/license/bizzarrowebgroup/react-native-geocode)

transform a description of a location into geographic coordinates

## Installation

```sh
yarn add react-native-geocode
```

## Usage

# Initialize the Geocode library with

```js
import Geocode from "react-native-geocode";
...

Geocode.intialize("GMAPS-API-KEY");
// or with options
Geocode.intialize("GMAPS-API-KEY", {language : "en"});
```

| Accepted props | Type   | Description            |
|----------------|--------|------------------------|
| apiKey         | String | Google Maps Apikey     |
| options        | Object | Google Geocode Options |

[for options props see](https://developers.google.com/maps/documentation/geocoding/intro#geocoding)

# You can call the from function with these parameters

| Accepted parameter    | Type    |
|-----------------------|---------|
| Address               | String  |
| {lat, lng}            | Object  |
| {latitude, longitude} | Object  |
| [latitude, longitude] | Array   |
| (latitude, longitude) | Numbers |

### Others examples (See also the example folder)

```js
// Geocode
Geocode.from("Colosseum").then(json => {
    var location = json.results[0].geometry.location;
    console.log(location);
}).catch(error => console.warn(error));

// Geocode from location
Geocode.from(41.89, 12.49).then(json => {
    var addressComponent = json.results[0].address_components[0];
    console.log(addressComponent);
}).catch(error => console.warn(error));

// Geocode from latitude
Geocode.from({
	latitude : 41.89,
	longitude : 12.49
});

// Geocode from latlng object
Geocode.from({
	lat : 41.89,
	lng : 12.49
});

// Geocode from array
Geocode.from([41.89, 12.49]);
```

## License

MIT

## Release Note

### 0.1.0

- Initial release
