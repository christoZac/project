import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlljobsParentComponent } from '../../components/alljobs-parent/alljobs-parent.component';
import { FindComponent } from '../../components/find/find.component';

const routes: Routes = [{
  path:'',component:AlljobsParentComponent
},
{path:'alljobs',component:AlljobsParentComponent},
{
  path:'alljobs/newjobs', component:FindComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
