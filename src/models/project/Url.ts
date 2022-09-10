import { TextValue, TextValueData } from "../dict/TextValue";


export interface ProjectUrlData {
    name: TextValueData;
    url: string;
}

export class ProjectUrl {

    name: TextValue;
    url: string;

    constructor(data: ProjectUrlData) {
        this.name = new TextValue(data.name)
        this.url = data.url
    }
}
