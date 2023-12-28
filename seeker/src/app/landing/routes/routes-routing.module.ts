import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../components/landing/landing.component';
import { RegistrationComponent } from 'src/app/auth/components/registration/registration.component';

const routes: Routes = [
  {
    path:'', component:LandingComponent
  },
  {
    path:'', loadChildren:() => import ('../../auth/auth.module') .then (m => m.AuthModule)
  },
  {
    path:'', loadChildren: () => import ('../../all-jobs/all-jobs.module').then (m =>m.AllJobsModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
