import { Language } from "src/models/Dictionary";
import { Theme } from "src/models/Theme";
import * as firebaseConfig from "../../hosting/firebaseConfig.json"

export const environment = {
  production: false,
  isMobile: window.innerWidth < 1200,
  defaultTheme: Theme.Light,
  defaultLanguage: Language.NL,
  title: '',
  description: '',
  keywords: '',
  robots: '',
  ownerEmail: 'stijnvanloon@home.nl',
  firebaseConfig: firebaseConfig
};
