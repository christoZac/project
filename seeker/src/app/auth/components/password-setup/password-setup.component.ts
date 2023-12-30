import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-password-setup',
  templateUrl: './password-setup.component.html',
  styleUrls: ['./password-setup.component.css']
})
export class PasswordSetupComponent {

signupId!: string ;
emailVerified:boolean=false;
password!:string;
constructor( private route: ActivatedRoute, private authService:AuthService) {

  this.route.queryParams.subscribe(params => {
    this.signupId = params['signupid'];
    alert(this.signupId)

    this.authService.verifyEmail(this.signupId).subscribe((data)=>{
      console.log(data);
      this.emailVerified=true;
     
    }
    ,(error)=>{
      alert("failed");
    }) 
 
  });
  


}

submit:Boolean=true;
click()   {

this.submit=false;
}
 
  passwordCheck(newPass: string, cPass: string) {
    if (newPass === cPass) {
      this.authService.verifyPassword(newPass, this.signupId).subscribe(
        (data: any) => {
          alert(data)

          if(data.status==200 && data.status>300){
            alert("password set successfully")
          }
          else{
            alert('failed to set')
          }
        },
        
      );
    } else {
      console.log("Passwords do not match");
    }
  }
}

 