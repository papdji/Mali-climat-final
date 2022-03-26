// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCqVftgM8Tn4i6DA-skZfOwOURQWFExD1s",
    authDomain: "ionfire-d0376.firebaseapp.com",
    projectId: "ionfire-d0376",
    storageBucket: "ionfire-d0376.appspot.com",
    messagingSenderId: "944411215829",
    appId: "1:944411215829:web:a587eca0f91f74d5c29f5c",
    measurementId: "G-Y6GE2MVZN6"
  },
  API_URL: 'https://api.weatherapi.com/v1/',
  API_KEY: '6e4fdb97cfc54e6d968201248221002',
  DEFAULT_CITY: 'Bamako',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
