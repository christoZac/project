import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ShowProfileComponent } from '../../components/show-profile/show-profile.component';
import { UpdateProfileComponent } from '../../components/update-profile/update-profile.component';
import { ViewprofileComponent } from '../../components/viewprofile/viewprofile.component';

const routes: Routes = [
  {path:'', component:ProfileComponent},
  {path:'profile', component:ProfileComponent},
  {path:'update', component:UpdateProfileComponent},
  {path:'viewProfile', component:ViewprofileComponent},
  {path:'show', component:ShowProfileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
