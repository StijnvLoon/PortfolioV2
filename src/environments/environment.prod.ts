import { Theme } from "src/models/Theme";

export const environment = {
  production: true,
  isMobile: window.innerWidth < 1200,
  defaultTheme: Theme.Light,
  ownerEmail: 'stijnvanloon@home.nl'
};
