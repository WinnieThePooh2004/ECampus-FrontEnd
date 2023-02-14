import { Component } from '@angular/core';
import {AuthRequests} from "../../../Requests/AuthRequests";

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent {
  public isLoggedIn : boolean;
  public constructor(private auth: AuthRequests) {
    this.isLoggedIn = localStorage.getItem('token') != null;
  }

  public logout(){
    localStorage.clear();
    this.isLoggedIn = false;
  }

  public login(){
    this.auth.login('1', '1');
    this.isLoggedIn = true;
  }
}
