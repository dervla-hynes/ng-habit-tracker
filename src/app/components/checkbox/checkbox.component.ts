import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  isActive:boolean = false;

  makeActive() {
    return this.isActive = !this.isActive;
  }

  constructor() { }

  ngOnInit() {
  }

}