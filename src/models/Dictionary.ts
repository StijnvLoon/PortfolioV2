export enum Language {
  NL,
  EN,
}

export interface TextValue {
  EN?: string
  NL?: string,
}

export interface Dictionary {
  error: string,
  welcome: string,
  keywords: string,
  status: string,
  pictures: string,
  links: string,
  faq: string,
  no_questions: string,
  translation_not_found: string,
  yes: string,
  no: string,
  cancel: string,
  confirm_delete_logo: string,
  main: string,
  cover: string,
  image: string,
  title: string,
  rest: string,
  logos: string,
  amount: string,
  colors: string,
  add: string,
  urls: string,
  url: string,
  name: string,
  question: string,
  answer: string,
  content: string,
  paragraph: string,
  text: string,
  to: string,
  remove: string,
  mail_subject: string,
  header_lobby: string,
  header_about: string,
  header_contact: string,
  header_change_theme: string,
  header_change_language: string,
  header_help: string,
  header_search: string,
  hint_navigate_to: string
}

export const languageArray: () => string[] = () => {
  return Object.keys(Language)
      .filter(value => isNaN(Number(value)) === false)
      .map(key => Language[key])
}