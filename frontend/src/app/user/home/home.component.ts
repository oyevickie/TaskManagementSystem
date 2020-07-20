import { Component, OnInit } from '@angular/core';
import { WebService, UserDetails } from '../../shared/web.service';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taskData

details;




  constructor(public auth: WebService, public router: Router) { }

  ngOnInit(): void {


    this.auth.profile().subscribe(
      user => {
        this.details = user;

      },
      err => {
        console.error(err);
      }
    );

  }

  getdetails(obj) {

    this.taskData = obj;
    this.router.navigateByUrl('/user/change_password/' + this.taskData);

  }

}
