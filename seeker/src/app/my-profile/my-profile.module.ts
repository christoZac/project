import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ProfileRoutingModule } from './routes/profile/profile-routing.module';
import { ViewprofileComponent } from './components/viewprofile/viewprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowProfileComponent } from './components/show-profile/show-profile.component';
import { ExperienceComponent } from './components/experience/experience.component';



@NgModule({
  declarations: [
    ProfileComponent,
    UpdateProfileComponent,
    ViewprofileComponent,
    ShowProfileComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyProfileModule { }
