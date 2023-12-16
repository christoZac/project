import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [{
  path:'',loadChildren:()=>import ('./auth/auth.module').then(m=>m.AuthModule)
},
{
  path:'',loadChildren:()=>import ('./all-jobs/all-jobs.module').then(m=>m.AllJobsModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
