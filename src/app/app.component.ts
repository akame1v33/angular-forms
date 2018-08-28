import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';


  userModel = new User('Kirito Kirigaya','kirito.kirigaya@gmail.com','09161234324','EVENING',true);

}
