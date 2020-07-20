import { Component, OnInit } from '@angular/core';
import { WebService, TokenPayload } from '../../shared/web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../signup/signup.component.css']
})
export class SigninComponent {

  isAdmin;

  credentails: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    address: '',
    dob: '',
    Bio: '',
    phone: '',
    addadmin: true
  };

  constructor(private auth: WebService, private router: Router) {}

  login() {
      this.auth.login(this.credentails).subscribe(
        () => {
          this.isAdmin = this.auth.getUserDetails().addadmin;

          if (this.isAdmin == true) {
              this.router.navigateByUrl('/task');
            }
          else {
          this.router.navigateByUrl('/user');
        }},
        err => {
          console.error(err);
        }
      );
  }


}
