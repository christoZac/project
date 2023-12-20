import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationChildComponent } from '../components/application-child/application-child.component';
import { ApplicationParentComponent } from '../components/application-parent/application-parent.component';

const routes: Routes = [
  {
    path:'',component:ApplicationParentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
