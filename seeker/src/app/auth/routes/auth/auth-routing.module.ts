import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlljobsParentComponent } from 'src/app/all-jobs/components/alljobs-parent/alljobs-parent.component';
import { HomeComponent } from 'src/app/home/components/home/home.component';
import { AuthHomeComponent } from '../../auth-home/auth-home.component';
import { ForgotpasswordComponent } from '../../components/forgotpassword/forgotpassword.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegistrationComponent } from '../../components/registration/registration.component';

const routes: Routes = [{
  path:'',component:AuthHomeComponent,
  children:[
    {
      path:'register', loadChildren:()=> import('./auth.module').then(m=>m.AuthModule)
    },
    {
      path: '', component:RegistrationComponent
    },
    {
      path:'login',component:LoginComponent
    },
    // {
    //   path:'alljobs',component:AlljobsParentComponent
    // },
    {
      path:'home', component:HomeComponent
    },
    {
      path:'register',component:RegistrationComponent
    },
    {
      path:'forgot-password',component:ForgotpasswordComponent
    }
  ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
