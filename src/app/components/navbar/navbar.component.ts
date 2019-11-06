import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  habitButton = "+ add a new habit";
  historyButton = "history";

  constructor() { }

  ngOnInit() {
  }

}
