import { Component, Inject, Input, OnInit } from '@angular/core';
import { myTask } from '../task/myTask';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../kanban-column/kanban-column.component';
@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {
  @Input() model?:myTask;

  constructor(
    public dialogRef: MatDialogRef<TaskEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(): void {
    if(this.model===undefined)
      this.model = {Name:"",Assignees:[],Description:"",ID:-1,isNew:true};
  }

}
