import { Language } from "src/models/Dictionary";
import { Theme } from "src/models/Theme";

export const environment = {
  production: true,
  isMobile: window.innerWidth < 1200,
  defaultTheme: Theme.Light,
  defaultLanguage: Language.NL,
  ownerEmail: 'stijnvanloon@home.nl'
};
