import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean

  constructor() {
    this.loading = false;
  }

  public startLoading() {
    this.loading = true;
  }

  public stopLoading() {
    this.loading = false;
  }

  public isLoading(): boolean {
    return this.loading;
  }
}
