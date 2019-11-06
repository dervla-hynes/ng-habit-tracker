import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})
export class HabitListComponent implements OnInit {
  habits = ["go for a run", "drink 8 glasses of water", "walk the dog"];

  constructor() { }

  ngOnInit() {
  }

}
