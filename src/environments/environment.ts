// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Language } from "src/models/Dictionary";
import { Theme } from "src/models/Theme";

export const environment = {
  production: false,
  isMobile: window.innerWidth < 1200,
  defaultTheme: Theme.Light,
  defaultLanguage: Language.NL,
  ownerEmail: 'stijnvanloon@home.nl'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
