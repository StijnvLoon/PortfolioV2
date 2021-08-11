import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean
  public lastErrorMessage: string

  constructor(
    private router: Router
  ) {
    this.loading = false;
    this.lastErrorMessage = ""
  }

  public startLoading() {
    this.loading = true;
  }

  public stopLoading(errMessage?: string) {
    if(errMessage !== undefined) {
      this.lastErrorMessage = errMessage
      this.router.navigate([`/Error`])
    }
    this.loading = false;
  }

  public isLoading(): boolean {
    return this.loading;
  }
}
