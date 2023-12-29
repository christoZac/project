import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { seekerReg } from '../../model/signUp';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm!: FormGroup;
  submitted: boolean = false;
  signUpData!: seekerReg;
  

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/\d+/), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      this.signUpData = this.registerForm.value;
      console.log(this.signUpData);
      this.authService.register(this.signUpData).subscribe((data: any) => {
        console.log(data);
      
        // this.authService.verifyEmail(this.signupId).subscribe(
        //   (verificationData: any) => {
        //     console.log(verificationData);
            alert("success");
      },
    //   (verificationError) => {
    //     console.log(verificationError);
    //     alert('Registration successful, but email verification failed.');
    //   }
    //     )}       
    // else{
    //   alert("failed");

    // }},
     
      (error)=>{
        alert("signup failed");
          console.log(error);
      }
     );
    }
  }
  }


