import { Language } from "./enums/Language";
import { Image } from "./Image";
import { TextValue } from "./TextValue";
import { Url } from "./Url";

export class Project {

    constructor(
        public id: string,
        public title: TextValue,
        public logos: Image[],
        public colors: string[],
        public content: Paragraph[],
        public status: TextValue,
        public coverImage: string,
        public keywords: TextValue[],
        public images: Image[],
        public urls: Url[],
        public faq: Question[]
    ) { }

    //TOD
    //waarom is het project gemaakt? (doelstelling)
    //wat is er gedaan
    //wat is het resultaat

    isGoodKeywordSearch(searchString: string, language: Language): boolean {
        const result = this.keywords.filter(
            (textvalue) => {
                const textString = textvalue.get(language).toLowerCase()
                const filterString = searchString.toLowerCase()

                return textString.includes(filterString)
            })[0]

        return result ? true : false
    }

    isGoodTitleSearh(searchString: string, language: Language): boolean {
        const textString = this.title.get(language).toLowerCase()
        const filterString = searchString.toLowerCase()

        return textString.includes(filterString)
    }

    getUrl(): string {
        return this.title.get(Language.EN).replaceAll(' ', '-');
    }
}

export class Paragraph {

    constructor(
        public title: TextValue,
        public text: TextValue,
        public content: Paragraph[] = []
    ) { }
}

export class Question {

    constructor(
        public question: TextValue,
        public answer: TextValue
    ) { }
}