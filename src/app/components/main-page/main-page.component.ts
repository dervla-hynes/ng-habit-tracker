import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  constructor() { }

  ngOnInit() {
  }

}
