export class TextValue {

    constructor(
        private map: Map<Language, string>
    ) { }

    get(lang: Language): string {
        return this.map.get(lang)
    }
}

export enum Language {
    NL,
    EN
}