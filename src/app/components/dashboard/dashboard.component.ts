import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  constructor() { }

  ngOnInit() {
  }

}
