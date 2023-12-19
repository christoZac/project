import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationParentComponent } from '../components/application-parent/application-parent.component';

const routes: Routes = [
  {
    path:'application',component:ApplicationParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
