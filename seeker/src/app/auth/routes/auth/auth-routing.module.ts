import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlljobsParentComponent } from 'src/app/all-jobs/components/alljobs-parent/alljobs-parent.component';
import { HomeComponent } from 'src/app/home/components/home/home.component';
import { AuthHomeComponent } from '../../auth-home/auth-home.component';
import { ForgotpasswordComponent } from '../../components/set-password/forgotpassword.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegistrationComponent } from '../../components/registration/registration.component';
import { PasswordSetupComponent } from '../../components/password-setup/password-setup.component';

const routes: Routes = [{
  path:'',component:AuthHomeComponent,
  children:[
    {
      path:'login',component:LoginComponent
    },
    {
      path:'home', component:HomeComponent
    },
    {
      path:'register',component:RegistrationComponent
    },
    {
      path:'forgot-password',component:ForgotpasswordComponent
    },
    {
      path:'set-password', component:PasswordSetupComponent
    },
    {
      path:'dashboard',component:AlljobsParentComponent
    }
  ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
