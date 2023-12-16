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

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent,
    // LoginComponent,
    //  RegistrationComponent,
    // LandingComponent

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
