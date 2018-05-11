import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


//Firebase
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(
    private afAuth: AngularFireAuth,
    private af: AngularFirestore
  ) {}

  public isAuthenticated(): boolean {
    return this.afAuth.auth.currentUser.uid != null;
  }

  public async login(email:string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  
}
