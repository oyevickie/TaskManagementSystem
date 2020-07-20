import { Component, OnInit } from '@angular/core';
import { WebService, UserDetails} from '../../shared/web.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  taskks: any;
  constructor(private auth: WebService) {}


  details: UserDetails;
  id = this.auth.getUserDetails()._id;

  // details = {
  //   first_name: '',
  // last_name: '',
  // email: '',
  // password: '',
  // address: '',
  // dob: '',
  // username: '',
  // Bio: '',
  // phone: '',

  // }

  contact;

  // tslint:disable-next-line: ban-types
  varname: Boolean = true;

  ngOnInit() {
    console.log(this.id);


    this.auth.profile().subscribe(
      user => {
        this.details = user;
      },
      err => {
        console.error(err);
      }
    );

  }


  onEdit(){
    this.varname = false;
    document.getElementById('save').style.display = 'block';
    document.getElementById('edit').style.display = 'none';

  }



updateTask() {
  this.varname = true;
  document.getElementById('save').style.display = 'none';
  document.getElementById('edit').style.display = 'block';
  
  this.auth.updateUser( this.id, this.details).subscribe(res => {
    console.log(this.details);

  });
 }

}
