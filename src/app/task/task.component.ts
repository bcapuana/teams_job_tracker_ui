import { Component, Input, OnInit } from '@angular/core';
import { myTask } from './myTask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() Task?:myTask;
  constructor() { }

  ngOnInit(): void {
  }
}

