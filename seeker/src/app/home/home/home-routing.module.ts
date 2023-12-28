import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [{
  path: 'home', component:HomeComponent,
  children: [
    {
      path: '', loadChildren: () => import('../../all-jobs/all-jobs.module').then(m=>m.AllJobsModule)
    },
  
  // {
  //   path: 'dashboard', loadChildren: () => import('../../all-jobs/all-jobs.module').then(m=>m.AllJobsModule)
  // },
  {
    path: 'application', loadChildren: () => import('../../application/application.module').then(m=>m.ApplicationModule)
  },
  {
    path: 'messages', loadChildren: () => import('../../messages/messages.module').then(m=>m.MessagesModule)
  },
  {
    path:'settings', loadChildren: ()=> import('../../settings/settings.module').then(m=>m.SettingsModule)
  },
  {
    path:'profile', loadChildren: ()=> import('../../my-profile/my-profile.module').then(m=>m.MyProfileModule)
  },

]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
