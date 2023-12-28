import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedJobsComponent } from './components/saved-jobs/saved-jobs.component';
import { ApplyJobsComponent } from './components/apply-jobs/apply-jobs.component';
import { SubmitJobsComponent } from './components/submit-jobs/submit-jobs.component';
import { AlljobsParentComponent } from './components/alljobs-parent/alljobs-parent.component';
import { AlljobsChildComponent } from './components/alljobs-child/alljobs-child.component';
import { AllHomeComponent } from './components/all-home/all-home.component';
import { JobsRoutingModule } from './routes/jobs/jobs-routing.module';
import { find } from 'rxjs';
import { FindComponent } from './components/find/find.component';



@NgModule({
  declarations: [
    SavedJobsComponent,
    ApplyJobsComponent,
    SubmitJobsComponent,
    AlljobsParentComponent,
    AlljobsChildComponent,
    AllHomeComponent,
    FindComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class AllJobsModule { }
