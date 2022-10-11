import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Project } from 'src/models/project/Project';
import * as Quill from "quill";

@Component({
    selector: 'app-edit-content',
    templateUrl: './edit-content.component.html',
    styleUrls: ['./edit-content.component.scss']
})
export class EditContentComponent implements OnInit, OnChanges {

    @Input() project: Project
    @Input() lang: string

    ngOnChanges(changes: SimpleChanges): void {
        if(this.quill) {
            const oldContent = JSON.stringify(this.quill.getContents())
            this.project.content[changes.lang.previousValue] = oldContent

            const newContent = this.project.content.get(changes.lang.currentValue)
            this.quill.setContents(newContent ? JSON.parse(newContent) : [])
        }
    }

    private quill

    constructor() { }

    ngOnInit(): void {
        this.quill = new Quill('#editor', {
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['link', 'image', 'code-block', 'blockquote'],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'align': [] }],
                    ['clean']
                ]
            },
            placeholder: 'Beschrijving van het project ...',
            theme: 'snow'
        })

        const content = this.project.content.get(this.lang)
        this.quill.setContents(content ? JSON.parse(content) : [])
    }
}
