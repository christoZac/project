import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
//   {
//   path:'',loadChildren:()=>import ('./auth/auth.module').then(m=>m.AuthModule)
// },
{
  path:'', loadChildren: () => import ('./landing/landing.module').then (m=>m.LandingModule)
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
