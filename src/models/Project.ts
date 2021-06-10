import { Language } from "./enums/Language";
import { Image } from "./Image";
import { TextValue } from "./TextValue";
import { Url } from "./Url";

export class Project {

    constructor(
        public id: string,
        public title: TextValue,
        public description: TextValue,
        public status: TextValue,
        public coverImage: string,
        public keywords: TextValue[],
        public images: Image[],
        public urls: Url[]
    ) { }

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
}