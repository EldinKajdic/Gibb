import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { auth } from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { User } from '../classes/users/user.model';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  user: any;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router, private platform: Platform) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else {
          localStorage.setItem('user', null);
          return of(null);
        }
      })
    );
  }

  async registerUser(userName: string, userEmail: string, userPassword: string) {
    var credential = await this.afAuth.auth.createUserWithEmailAndPassword(userEmail, userPassword);
    if (credential.user) {
      this.user = this.updateUserData(credential.user);
    }
    return credential;
  }

  async sendEmailVerification() {
    // const result = await this.afAuth.auth.currentUser.sendEmailVerification();
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async navigate(router: string) {
    this.router.navigate([router]);
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    if (!this.platform.is('cordova')) {
      await this.afAuth.auth.signInWithPopup(provider).then((user) => {
        this.user = this.updateUserData(user);
        return this.router.navigate(['/tabs/home']);
      }).catch(error => {
        return error.message;
      });
    }
  }

  async getUser() {
    return this.user;
  }

  async signInWithCredentials(email: string, password: string) {
    var credential = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    if (credential.user) {
      this.user = this.updateUserData(credential.user);
    }
    return credential;
  }

  async signOut() {
    await this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      return this.router.navigate(['/login']);
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true });
  }

}
