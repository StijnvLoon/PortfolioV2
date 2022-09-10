import { Language } from "src/models/dict/Dictionary";
import { Theme } from "src/models/Theme";
import * as firebaseConfig from "../../hosting/firebaseConfig.json"

export const environment = {
  production: true,
  isMobile: window.innerWidth < 1200,
  defaultTheme: Theme.Light,
  defaultLanguage: Language.NL,
  title: 'Portfolio website Stijn van Loon',
  description: 'Een overzicht van projecten waar Stijn van Loon aan gewerkt heeft.',
  keywords: 'portfolio, stijn van loon, ontwikkelaar, frontend, backend',
  robots: 'index, follow',
  ownerEmail: 'stijnvanloon@home.nl',
  firebaseConfig: firebaseConfig
};
