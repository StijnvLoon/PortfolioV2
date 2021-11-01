export enum Language {
  NL,
  EN,
}

export interface TextValue {
  EN?: string
  NL?: string,
}

export interface Dictionary {
  error: string
  welcome: string
  keywords: string
  status: string
  pictures: string
  links: string
  faq: string
  no_questions: string
  translation_not_found: string
  yes: string
  no: string
  cancel: string
  confirm_delete_logo: string
  main: string
  cover: string
  image: string
  title: string
  rest: string
  logos: string
  amount: string
  colors: string
  add: string
  urls: string
  url: string
  name: string,
  question: string
  answer: string
  content: string
  paragraph: string
  text: string
  to: string
  remove: string
  login_first: string
  login_username: string
  login_password: string
  login_required: string
  form_required: string
  submit: string
  mail_question_subject: string
  mail_contact_subject: string
  editor_submit: string
  editor_update: string
  editor_delete: string
  header_lobby: string
  header_about: string
  header_change_theme: string
  header_change_language: string
  header_help: string
  header_search: string
  hint_options: string
  hint_navigate_to: string
  hint_scrollup: string
  hint_askquestion: string
  hint_open_url: string
  hint_image_previous: string
  hint_image_next: string
  hint_search: string
  file_picker_choose_image: string
  file_picker_upload: string
  file_picker_namefilter: string
  about_introduction: string
  about_paragraph_hobbies: string
  about_hobbies: string
  about_paragraph_studies: string
  about_studies: string
  about_paragraph_experience: string
  about_paragraph_programminglanguages: string
  about_programminglanguages: string
  about_paragraph_frameworks: string
  about_frameworks: string
  about_paragraph_work: string
  about_work: string
  about_paragraph_programs: string
  about_programs: string
  about_paragraph_contact: string
}

export const languageArray: () => string[] = () => {
  return Object.keys(Language)
      .filter(value => isNaN(Number(value)) === false)
      .map(key => Language[key])
}