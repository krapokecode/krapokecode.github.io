import { RouterModule, Routes } from '@angular/router';
import {Angular2Component} from './component/angular2/angular2.component';
import {FirebaseComponent} from './component/firebase/firebase.component';
import {FeathersComponent} from './component/feathers/feathers.component';
import {AboutComponent} from './component/about/about.component';
import {PHP7Component} from './component/php7/php7.component';
import {CardComponent} from './component/card/card.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'php', component: PHP7Component },
  { path: 'firebase', component: FirebaseComponent },
  { path: 'feathers', component: FeathersComponent },
  { path: 'angular2', component: Angular2Component }
];

export const routing = RouterModule.forRoot(routes)
