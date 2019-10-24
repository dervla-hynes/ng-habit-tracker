import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-habit-item',
  templateUrl: './habit-item.component.html',
  styleUrls: ['./habit-item.component.scss']
})
export class HabitItemComponent implements OnInit {

  @Input() text:string;

  constructor() { }

  ngOnInit() {
  }

}
