import { Language } from "src/models/Dictionary";
import { Theme } from "src/models/Theme";
import * as firebaseConfig from "../../hosting/firebaseConfig.json"

export const environment = {
  production: true,
  isMobile: window.innerWidth < 1200,
  defaultTheme: Theme.Light,
  defaultLanguage: Language.NL,
  ownerEmail: 'stijnvanloon@home.nl',
  firebaseConfig: firebaseConfig
};
