import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [{
  path: 'home', component:HomeComponent,
  children: [
  
  {
    path: 'dashboard', loadChildren: () => import('../../all-jobs/all-jobs.module').then(m=>m.AllJobsModule)
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
