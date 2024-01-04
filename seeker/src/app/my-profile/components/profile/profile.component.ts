import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private ps:ProfileService){}

  newProfile(id:any){
    this.ps.addProfile(id).subscribe((response)=>{
      console.log(response);
      
    })

  }

}
