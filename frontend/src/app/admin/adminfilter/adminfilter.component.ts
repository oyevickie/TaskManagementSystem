import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminfilter',
  templateUrl: './adminfilter.component.html',
  styleUrls: ['./adminfilter.component.css']
})
export class AdminfilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reload() {
    window.location.reload();
}

}

