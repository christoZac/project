import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
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
    HomeModule
    // HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
