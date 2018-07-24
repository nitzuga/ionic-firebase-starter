import { Injectable } from '@angular/core';


//Firebase
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";


@Injectable()
export class FirebaseProvider {

  /**
  * Reference Object used for Subscriptions.
  **/
  private ref;

  constructor(
    private afAuth: AngularFireAuth,
    private af: AngularFirestore
  ) {}

  /**
  * isAthenticated
  * @description : Return TRUE/FALSE if the User is authenticated.
  * @returns : boolean
  */
  public isAuthenticated(): boolean {
    return this.afAuth.auth.currentUser.uid != null;
  } //isAuthenticated

  /**
  * login
  * @description : 
  * @returns : Promise<any>
  **/
  public login(email:string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  } //login

  public logout() : Promise<void> {
    //return this.afAuth.auth
  } //logout

  
} //FirebaseProvider
