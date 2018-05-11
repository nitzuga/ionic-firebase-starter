import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    private fp: FirebaseProvider
  ) {

  }

  public validForm(){
    let flag = true;
    
    // logica para verificar formulario login
    flag = this.verifyEmail();
    if( flag ) {
      this.login();
    }
  }

  /** Permite verificar que el correo este bien escrito. */
  private verifyEmail(): boolean{
    return true;
  }
  private login(){
    this.fp.login(this.email, this.password);
  }
}
