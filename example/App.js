import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Geocode from 'react-native-geocode';

const App = () => {
  const [input, setInput] = React.useState();
  const [location, setLocation] = React.useState();
  React.useEffect(() => {
    Geocode.intialize('GMAPS-KEY', {
      language: 'it',
    });
  }, []);
  const pushedButton = () => {
    Geocode.from('Via Garigliano, 28 Mestre 30173')
      .then(json => {
        var geo_location = json.results[0].geometry.location;
        console.log(geo_location);
        setLocation(geo_location);
      })
      .catch(error => console.warn(error));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Geocode example</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'Input the street here'}
        onChangeText={text => setInput(text)}
        value={input}
        placeholderTextColor={'darkblue'}
      />
      <TouchableOpacity onPress={pushedButton} style={styles.button}>
        <Text style={[styles.paragraph, { color: 'white' }]}>Gecode me!</Text>
      </TouchableOpacity>
      {location && (
        <Text style={styles.renderedText}>
          Lat: {location.lat}
          {'\n'}
          Lng: {location.lng}
        </Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    marginHorizontal: 40,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'darkblue',
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: '#ddd',
    color: 'darkblue',
    padding: 18,
    marginBottom: 20,
  },
  renderedText: {
    color: 'darkblue',
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center',
  },
});
