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
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else {
          return of(null);
        }
      })
    );
  }

  registerUser(userEmail: string, userPassword: string): any {
    throw new Error("Method not implemented.");
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    if (!this.platform.is('cordova')) {
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      this.user = this.updateUserData(credential.user);
      return this.router.navigate(['/tabs/home']);
    }
  }

  async getUser() {
    return this.user;
  }

  async signInWithCredentials(email, password){
    const credential = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.user = this.updateUserData(credential.user);
    return this.router.navigate(['/tabs/home']);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/login']);
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
