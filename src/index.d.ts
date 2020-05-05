declare module 'react-native-geocoding' {
  namespace Geocode {
    export function intialize(apiKey: string, options: Object): void;
    export function isIntialized(): boolean;
    export function setApiKey(API_KEY: string): void;
    export function from(...params: any[]): Promise<any>;
    export function getFromLocation(address: string): Promise<any>;
    export function getFromLatLng(lat: number, lng: number): Promise<any>;
  }
  export = Geocode;
}
