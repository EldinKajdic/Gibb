import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterModalModule } from './pages/register/modals/registermodal/registermodal.module';

var config = {
  apiKey: "AIzaSyDM79xt0ytIBLP3fImhkg2ho-S_JEeGf68",
  authDomain: "gibb-8a71d.firebaseapp.com",
  databaseURL: "https://gibb-8a71d.firebaseio.com",
  projectId: "gibb-8a71d",
  storageBucket: "gibb-8a71d.appspot.com",
  messagingSenderId: "468341912910"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    RegisterModalModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage,   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
