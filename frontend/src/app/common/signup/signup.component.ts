import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { WebService, TokenPayload } from '../../shared/web.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

credentails: TokenPayload = {
  _id: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  address: '',
  dob: '',
  username: '',
  Bio: '',
  phone: '',
  addadmin: false
};
  usernamee: any;

    constructor( private signUp: WebService, private router: Router) { }

    register() {
      console.log(this.credentails);
      this.signUp.register(this.credentails).subscribe(
        () => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.credentails));
          this.router.navigateByUrl('/login');
        },
        err => {
          console.log(err);

        }
      );
    }


    username;

click() {

  if (this.credentails.username == '' && this.credentails.first_name != '' && this.credentails.last_name != '') {
    this.username = this.credentails.first_name.substr(0, 1) +     this.credentails.last_name.substr(0, 49);
    this.username = this.username.replace(/\s+/g, '');
    this.username = this.username.replace(/\'+/g, '');
    this.username = this.username.replace(/-+/g, '');
    this.username = this.username.toLowerCase();
    this.usernamee = this.username;
}

}
}
