import { TextValue, TextValueData } from "../dict/TextValue";


export interface ProjectQuestionData {
    question: TextValueData
    answer: TextValueData
}

export class ProjectQuestion {

    question: TextValue
    answer: TextValue

    constructor(data: ProjectQuestionData) {
        this.question = new TextValue(data.question)
        this.answer = new TextValue(data.answer)
    }
}