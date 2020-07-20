import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../../shared/web.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {


 taskdata;
  taskId: any;

  constructor( private activate: ActivatedRoute, public user: WebService) {}

  ngOnInit() {
    this.taskId = this.activate.snapshot.params;
    console.log(this.taskId);

    this.user.getone(this.taskId.id).subscribe(
     data => {
       this.taskdata = data;
     },
     err => {
       console.log(err);

     }
   );

  }

}
