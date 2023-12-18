import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// import {LoginComponent} from './auth/components/login/login.component';
// import { RegistrationComponent } from './auth/components/registration/registration.component';
import { LandingComponent } from './landing-page/components/landing/landing.component';
import { ProfileComponent } from './my-profile/components/profile/profile.component';
import { MessageParentComponent } from './messages/components/message-parent/message-parent.component';
import { FindComponent } from './all-jobs/components/find/find.component';
import { ApplicationParentComponent } from './all-jobs/components/application-parent/application-parent.component';
import { ApplicationChildComponent } from './all-jobs/components/application-child/application-child.component';
import { AlljobsParentComponent } from './all-jobs/components/alljobs-parent/alljobs-parent.component';
import { AlljobsChildComponent } from './all-jobs/components/alljobs-child/alljobs-child.component';
@NgModule({
  declarations: [
    AppComponent,
    // SidebarComponent,
    // MessageParentComponent,
    // FooterComponent,
    // HeaderComponent,
    // SidebarComponent
    // ProfileComponent
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent,
    // LoginComponent,
    //  RegistrationComponent,
    // LandingComponent
    // FindComponent
    // ApplicationParentComponent
    // ApplicationChildComponent
    // AlljobsParentComponent
    // AlljobsChildComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    // HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
