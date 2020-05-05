import { NativeModules } from 'react-native';

type GeocodeType = {
  getDeviceName(): Promise<string>;
};

const { Geocode } = NativeModules;

export default Geocode as GeocodeType;
