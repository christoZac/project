import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlljobsParentComponent } from 'src/app/all-jobs/components/alljobs-parent/alljobs-parent.component';
import { AuthHomeComponent } from '../../auth-home/auth-home.component';
import { LoginComponent } from '../../components/login/login.component';

const routes: Routes = [{
  path:'',component:AuthHomeComponent,
  children:[
    {
      path: '', component:LoginComponent
    },
    {
      path:'login',component:LoginComponent
    },
    {
      path:'alljobs',component:AlljobsParentComponent
    }
  ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
