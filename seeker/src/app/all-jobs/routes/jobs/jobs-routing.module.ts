import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlljobsParentComponent } from '../../components/alljobs-parent/alljobs-parent.component';
import { ApplyJobsComponent } from '../../components/apply-jobs/apply-jobs.component';
import { FindComponent } from '../../components/find/find.component';
import { SavedJobsComponent } from '../../components/saved-jobs/saved-jobs.component';
import { SubmitJobsComponent } from '../../components/submit-jobs/submit-jobs.component';
import { ApplicationParentComponent } from 'src/app/application/components/application-parent/application-parent.component';

const routes: Routes = [{
  path:'',component:AlljobsParentComponent,
},
{
  path:'dashboard',component:AlljobsParentComponent
},
{
  path:'alljobs/newjobs', component:FindComponent
},
{
  path:'findJobs',component:FindComponent
},
{
  path:'savedjobs', component:SavedJobsComponent
},
{
  path:'findJobs/applyJob', component:ApplyJobsComponent
},
{
  path:'finJobs/applyJob/submit', component:SubmitJobsComponent
},
// {
//   path:'application', component:ApplicationParentComponent 
// },



];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
