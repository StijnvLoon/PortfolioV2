
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
}
