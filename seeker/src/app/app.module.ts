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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/Interceptor/auth.interceptor';
import { FindComponent } from './all-jobs/components/find/find.component';
import { ProfileRoutingModule } from './my-profile/routes/profile/profile-routing.module';

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
    RouterModule,
    SharedModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    LandingModule,
    AllJobsModule,
    ApplicationModule,
    HttpClientModule,
    ProfileRoutingModule
    // HeaderComponent
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
