import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageParentComponent } from './components/message-parent/message-parent.component';
import { MessageChildComponent } from './components/message-child/message-child.component';
import { MessageRoutingModule } from './routes/message/message-routing.module';



@NgModule({
  declarations: [
    MessageParentComponent,
    MessageChildComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule
  ]
})
export class MessagesModule { }
