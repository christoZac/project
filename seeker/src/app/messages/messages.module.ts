import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageParentComponent } from './components/message-parent/message-parent.component';
import { MessageChildComponent } from './components/message-child/message-child.component';



@NgModule({
  declarations: [
    MessageParentComponent,
    MessageChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MessagesModule { }
