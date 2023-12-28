import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllJobsModule } from './all-jobs/all-jobs.module';
import { LandingModule } from './landing/landing.module';
import { ApplicationModule } from './application/application.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
<<<<<<< HEAD
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
    FindComponent
    // ApplicationParentComponent
    // ApplicationChildComponent
    // AlljobsParentComponent
    // AlljobsChildComponent
    
=======
    AppComponent,    
>>>>>>> 0a6d23424156373bdc6fc2dc0fd6fedd4c384096
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    LandingModule,
    AllJobsModule,
    ApplicationModule,
    HttpClientModule
    // HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
