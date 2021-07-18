import { Component, OnInit } from '@angular/core';
import { Ranger } from './ownRanger';

@Component({
  selector: 'app-ranger-app',
  templateUrl: './ranger-app.component.html',
  styleUrls: ['./ranger-app.component.css']
})
export class RangerAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
const ranger = new Ranger('Ranger1','Ranger2');
ranger.start();
ranger.countPoint();

