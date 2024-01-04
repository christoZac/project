import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ProfileRoutingModule } from './routes/profile/profile-routing.module';
import { ViewprofileComponent } from './components/viewprofile/viewprofile.component';



@NgModule({
  declarations: [
    ProfileComponent,
    UpdateProfileComponent,
    ViewprofileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class MyProfileModule { }
