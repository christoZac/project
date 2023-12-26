import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm!:FormGroup

  constructor(private fb:FormBuilder ,){}

  ngOnInit(){
    this.registerForm=this.fb.group({
      fullname:['',[Validators.required]],
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required, Validators.pattern(/\d+/),Validators.minLength(10)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      cpassword:['',[Validators.required, Validators.minLength(8)]]
    })
  }

  submitted:boolean=false;
  submit(){
    this.submitted=true;
  }

}
