import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './routes';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CardComponent } from './component/card/card.component';
import { Angular2Component } from './component/angular2/angular2.component';
import { FirebaseComponent } from './component/firebase/firebase.component';
import { FeathersComponent } from './component/feathers/feathers.component';
import { AboutComponent } from './component/about/about.component';
import { PHP7Component } from './component/php7/php7.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDx0pPr1RgOGxzkOdkq7FXsEu32ebb2Rz4',
  authDomain: 'my-blog-cae2c.firebaseapp.com',
  databaseURL: 'https://my-blog-cae2c.firebaseio.com',
  storageBucket: 'my-blog-cae2c.appspot.com',
  messagingSenderId: '661760832307'
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    Angular2Component,
    FirebaseComponent,
    FeathersComponent,
    AboutComponent,
    PHP7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
