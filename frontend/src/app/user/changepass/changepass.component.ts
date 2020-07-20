import { Component, OnInit } from '@angular/core';
import { WebService , UserDetails } from 'src/app/shared/web.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {



taskData={
password: '',
confrimPassword: ''
}
  taskId: any;

  constructor(private auth: WebService, public activated: ActivatedRoute) {}

  ngOnInit(): void {

    this.taskId = this.activated.snapshot.params;


  }


updateTask() {

  console.log(this.taskData);


  this.auth.updatePass(this.taskId.id, this.taskData).subscribe(res => {
    alert('Password Updated');
  });
 }
 }


