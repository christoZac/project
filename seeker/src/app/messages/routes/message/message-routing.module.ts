import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageParentComponent } from '../../components/message-parent/message-parent.component';

const routes: Routes = [
  {
    path:"", component:MessageParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
