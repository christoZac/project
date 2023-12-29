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
  // submit() {
  // this.authService.verifyPassword(signupId,password).subscribe((data: any) => {
  //   console.log(data);

  // })}

passwordCheck(newPass:any,cPass:any){
  if(newPass===cPass){
    // this.authService.verifyPassword(this.signupId,password).subscribe((data: any) => {
    // console.log(data);
    console.log("password success");

    
  }
  else{
    console.log("not match");
    
  }

}

  
}

