import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'desktop-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent {

  @Input() url: string;
  @Input() editProjectUrl: string

  constructor(
    private router: Router
  ) { }

  editProject() {
    this.router.navigateByUrl(this.editProjectUrl)
  }

}
