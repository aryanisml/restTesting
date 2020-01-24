import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'RestTesting';

  constructor(private authService: AuthService) {

  }

  login() {
    this.authService.login().subscribe(response => console.log(response));
  }
}
