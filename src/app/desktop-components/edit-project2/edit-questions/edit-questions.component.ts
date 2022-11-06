import { Component, Input, OnInit } from '@angular/core';
import { TextValue } from 'src/models/dict/TextValue';
import { Project } from 'src/models/project/Project';
import { ProjectQuestion } from 'src/models/project/Question';
import { LanguageService } from 'src/services/language.service';
import { ProjectService } from 'src/services/project.service';

@Component({
    selector: 'app-edit-questions',
    templateUrl: './edit-questions.component.html',
    styleUrls: ['./edit-questions.component.scss']
})
export class EditQuestionsComponent implements OnInit {

    @Input() project: Project
    @Input() lang: string

    constructor(
        public languageService: LanguageService,
        private projectService: ProjectService
    ) { }

    ngOnInit(): void {
    }

    addQuestion() {
        this.project.questions.push(new ProjectQuestion({
            question: new TextValue({}),
            answer: new TextValue({})
        }))
    }

    removeQuestion(index: number) {
        this.project.questions.splice(index, 1)
    }

}
