import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { pageLoaderAnim } from '../../animations/pageLoaderAnim';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
  animations: [pageLoaderAnim]
})
export class PageLoaderComponent implements OnInit {

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
