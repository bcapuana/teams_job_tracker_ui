import { Component } from '@angular/core';
import { kanban_model } from './kanban/kanban';
import { kanban_column } from './kanban-column/kanban-column';
import { myTask } from './task/myTask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'job_tracking_ui';
  kanban1:kanban_model ={title:"Tasks", columns:[
    {title:"Unassigned",tasks:[]},
    {title:"Assigned - Not Started",tasks:[{isNew: false,ID:1,Name:"Task1",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu. Nulla facilisi morbi tempus iaculis. Enim sit amet venenatis urna cursus. Eu consequat ac felis donec et odio pellentesque diam volutpat. Amet venenatis urna cursus eget nunc scelerisque. Libero volutpat sed cras ornare. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Eget mauris pharetra et ultrices neque. Tempor orci eu lobortis elementum nibh tellus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Sem viverra aliquet eget sit amet tellus cras adipiscing. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.",Assignees:[]},
    {isNew: false, ID:1,Name:"Task1",Description:"Tristique senectus et netus et malesuada fames ac turpis egestas. Sollicitudin tempor id eu nisl. Lacus viverra vitae congue eu consequat ac felis. Venenatis cras sed felis eget. Euismod elementum nisi quis eleifend quam adipiscing vitae. Vivamus at augue eget arcu. Eu scelerisque felis imperdiet proin fermentum. In pellentesque massa placerat duis ultricies lacus sed turpis. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Egestas congue quisque egestas diam in arcu cursus. Amet mattis vulputate enim nulla aliquet. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Consequat ac felis donec et odio pellentesque diam volutpat. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Ornare quam viverra orci sagittis eu. Aliquet enim tortor at auctor.",Assignees:[]},
    {isNew: false, ID:2,Name:"Task1",Description:"Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Suscipit tellus mauris a diam. Purus faucibus ornare suspendisse sed nisi lacus. Sit amet nulla facilisi morbi tempus. Nullam vehicula ipsum a arcu cursus. Bibendum est ultricies integer quis auctor elit sed. Orci ac auctor augue mauris augue neque. Odio ut sem nulla pharetra diam sit amet. Donec enim diam vulputate ut pharetra sit. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Nullam non nisi est sit.",Assignees:[]},
    {isNew: false, ID:3,Name:"Task1",Description:";akdfj;alkdfj;alskdfj;alskdfja;sldkfja;sldkfja;sfasdkjfa;lsdkfja;lkdfj;asdklfja;sdfkjas",Assignees:[]},
    {isNew: false, ID:4,Name:"Task1",Description:";akdfj;alkdfj;alskdfj;alskdfja;sl dkfja;sldkfja;sfasdkjf a;lsdkfja;lkdfj;asdklfja;sdfkjas",Assignees:[]},
    {isNew: false, ID:5,Name:"Task1",Description:";akdfj;alkdfj;alskdfj;alskdfja;sldkfja;sldkfja;sfasdkjfa;lsdkfja;lkdfj;asdklfja;sdfkjas",Assignees:[]},
    {isNew: false, ID:6,Name:"Task1",Description:";akdfj;alkdfj;alskdfj;alskdfja;sld kfja;sldkfja; sfasdkjfa;lsdkfja;lkdfj;asdklfja;sdfkjas",Assignees:[]},
    {isNew: false, ID:7,Name:"Task1",Description:";akdfj;alkdfj;alskdfj;alskdfja;sldkfja;sldkfja;sfasdkjfa;lsdkfja;lkdfj;asdklfja;sdfkjas",Assignees:[]},
    {isNew: false, ID:8,Name:"Task1",Description:";akdfj;alkdfj;alskdfj;alskdfja;sldkfja;sldkfja;sfasdkjfa;lsd kfja;lkdfj;asdklfja;sdfkjas",Assignees:[]},]},
    {title:"Assigned - On Hold",tasks:[]},
    {title:"Assigned - In Progress",tasks:[]},
    {title:"Assigned - Complete",tasks:[]},
  ]};

  constructor() {
    
   }
}
