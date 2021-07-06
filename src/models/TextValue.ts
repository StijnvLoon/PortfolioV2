import { Language } from "./enums/Language";

export class TextValue {

    constructor(
        private map: Map<Language, string>
    ) { }

    get(lang: Language): string {
        const translation: string = this.map.get(lang)

        if(translation) {
            return this.map.get(lang)
        } else {
            return 'error'
        }

    }
}