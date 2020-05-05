import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Geocode from 'react-native-geocode';

export default function App() {
  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    Geocode.init("apikey", { language: "en" });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Geocode Examples</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
