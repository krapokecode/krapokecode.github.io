import {Component, Inject} from '@angular/core';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private image: any;
  constructor(@Inject(FirebaseApp) firebase: any) {
    const playersRef = firebase.database().ref('players/');
  }
}
