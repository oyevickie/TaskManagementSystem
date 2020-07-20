import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {


  taskData;

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
    console.log(this.taskData);
    this.router.navigateByUrl('/task/change_password/' + this.taskData);

  }
}
