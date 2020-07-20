import { Component, OnInit } from '@angular/core';
import { WebService, UserDetails } from '../../shared/web.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data: UserDetails;
details;



admin = 'singhkeshav96@gmail.com';

constructor(public auth: WebService) { }

detail = {
  email: this.auth.getUserDetails().email,
  subject: '',
  message: ''
};

  ngOnInit(): void {

  }

contact() {
  this.auth.contact(this.detail).subscribe(res => {
    alert('Email Sent Successfully');
    location.reload();
  });

}
}
