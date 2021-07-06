import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/models/Project';

@Component({
  selector: 'desktop-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  @Input() project: Project;

  constructor() { }

  ngOnInit(): void {
  }

}
