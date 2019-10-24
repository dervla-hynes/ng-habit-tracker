import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weekday',
  templateUrl: './weekday.component.html',
  styleUrls: ['./weekday.component.scss']
})
export class WeekdayComponent implements OnInit {

  @Input() text:string;

  constructor() { }

  ngOnInit() {
  }

}
