import { TextValue, TextValueData } from "../dict/TextValue";


export interface ProjectImageData {
    title: TextValueData;
    url: string;
}

export class ProjectImage {

    title: TextValue
    url: string

    constructor(data: ProjectImageData) {
        this.title = new TextValue(data.title)
        this.url = data.url
    }
}