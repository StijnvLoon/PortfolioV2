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
        public keywords: string[],
        public images: Image[],
        public urls: Url[]
    ) { }
}