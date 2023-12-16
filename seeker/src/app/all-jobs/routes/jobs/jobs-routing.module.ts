import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlljobsParentComponent } from '../../components/alljobs-parent/alljobs-parent.component';

const routes: Routes = [{
  path:'',component:AlljobsParentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
