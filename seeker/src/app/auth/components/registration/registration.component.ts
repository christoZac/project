import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { seekerReg } from '../../model/signUp';
import { AuthService } from '../../service/auth.service';

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

      this.authService.postUser(this.signUpData).subscribe((data: any) => {
        if (data.status >= 200 && data.status <= 299) {
          console.log('Successfully registered');
        } else {
          console.log('Registration failed');
        }
      });
    }
  }
}
