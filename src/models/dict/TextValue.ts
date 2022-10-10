import { Language } from "./Dictionary";

export interface TextValueData {
    EN?: string;
    NL?: string;
}

export class TextValue {

    EN?: string
    NL?: string

    constructor(data: TextValueData) {
        this.EN = data.EN
        this.NL = data.NL
    }

    get(identifier: number | string | Language): string {
        switch(typeof identifier) {
            case 'number': return this[Language[identifier]] || ""
            case 'string': return this[identifier] || ""
            case 'object': return this[identifier as Language] || ""
        }
    }
}
