import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { login } from '../../model/signUp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authservice:AuthService){}
  data!:login
  value(data:any){
    console.log(data);
  }

  seekerLogin(){
    this.authservice.login(this.data).subscribe((response:any)=>{
      console.log(response);

      const token=localStorage.setItem('accessToken',response.token)

      if(response.token){
        alert("login success")

      }
      else{
        alert("error")
      }
      
    })
  }
 }
