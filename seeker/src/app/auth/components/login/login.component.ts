import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { login } from '../../model/signUp';
import { Router } from '@angular/router';
import { profile } from 'src/app/my-profile/model/profile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  profiles!:profile

  constructor(private authservice:AuthService,private router:Router){}


  seekerLogin(data:any){
    this.authservice.login(data).subscribe((response:any)=>{
      console.log(response);

      const token=localStorage.setItem('accessToken',response.token)
      const jobSeekerId=localStorage.setItem("id",response.id)


      if(response.token){
        alert("login success")
        this.router.navigate(['home/dashboard']);

      }
      else{
        alert("error")
      }
      
      
    },(error)=>{
      alert("failed");
  })
  }



 }
