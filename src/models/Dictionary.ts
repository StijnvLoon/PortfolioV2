export enum Language {
  NL,
  EN,
}

export interface TextValue {
  EN?: string
  NL?: string,
}

export interface Dictionary {
  about: string,
  error: string,
  welcome: string,
  search: string,
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
  mail_subject: string
}

export const languageArray: () => string[] = () => {
  return Object.keys(Language)
      .filter(value => isNaN(Number(value)) === false)
      .map(key => Language[key])
}