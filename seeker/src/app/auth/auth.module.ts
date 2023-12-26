import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AuthRoutingModule } from './routes/auth/auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { PasswordSetupComponent } from './components/password-setup/password-setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    AuthHomeComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    PasswordSetupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class AuthModule { }
