import { Language } from "./enums/Language";

export class TextValue {

    constructor(
        private map: Map<Language, string>
    ) { }

    get(lang: Language): string {
        return this.map.get(lang)
    }
}