import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

/** Firebase */
import { AngularFireModule } from 'angularfire2';
//Auth
import { AngularFireAuthModule } from "angularfire2/auth";
//Cloudstore
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
