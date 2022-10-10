import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { TaskEditorComponent } from '../task-editor/task-editor.component';
import { kanban_column } from './kanban-column';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {

}

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {

  @Input() model?:kanban_column;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addTask():void{
    const dialogRef = this.dialog.open(TaskEditorComponent,
      {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        alert(result.Name);
        this.model?.tasks.push(result);
      });
  }

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
