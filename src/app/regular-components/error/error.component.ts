import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(
    public loaderService: LoaderService
  ) { }

  ngOnInit(): void {
  }

}
