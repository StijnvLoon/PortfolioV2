import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // firestore db only allows logged in users to edit db

  private loggedInUser: firebase.default.User

  constructor(private firebaseAuth: AngularFireAuth) { }

  login(
    email: string,
    password: string,
    onResult: (user: firebase.default.User) => void,
    onError: (error: string) => void
  ) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.loggedInUser = result.user
        onResult(this.loggedInUser)
      })
      .catch((error) => {
        onError(error)
      })
  }

  logout(onResult: () => void, onError: () => void) {
    this.firebaseAuth.signOut()
      .then(() => {
        onResult()
      })
      .catch(() => {
        this.loggedInUser = undefined
        onError()
      })
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== undefined
  }
}
