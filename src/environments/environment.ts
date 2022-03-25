// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
  apiKey: "AIzaSyA_sZVol1VVFj8RV-dC7rkJbqGqHp2DdyQ",
  authDomain: "mali-climat.firebaseapp.com",
  databaseURL: "https://mali-climat-default-rtdb.firebaseio.com",
  projectId: "mali-climat",
  storageBucket: "mali-climat.appspot.com",
  messagingSenderId: "528359971696",
  appId: "1:528359971696:web:893b8adb2afcdd7b2a0db5",
  measurementId: "G-7X6FJP1VRC"
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
