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
  translation_not_found: string
}

export const languageArray: () => string[] = () => {
  return Object.keys(Language)
      .filter(value => isNaN(Number(value)) === false)
      .map(key => Language[key])
}