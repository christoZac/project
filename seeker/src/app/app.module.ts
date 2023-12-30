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

@NgModule({
  declarations: [
    AppComponent,    
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
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
