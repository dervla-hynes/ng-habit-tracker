import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  tester() {
    alert('color changed to pink');
  }

  constructor() { }

  ngOnInit() {
  }

}

//add event listener on each checkbox to change color onclick
// // .addEventListener('click', changeToCompleted);
// const changeToCompleted = () => {
//   return null;
// }