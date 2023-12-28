import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
 
  constructor(private fb:FormBuilder,private authService: AuthService){}


  submit() {
  this.authService.verifyPassword(signupId,password).subscribe((data: any) => {
    console.log(data);
    
  })}
}

  
