import { Component } from '@angular/core';
import { profile } from '../../model/profile';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profiles: profile[] = [];

  constructor(private ps: ProfileService) {}
  
  newProfile(data: any) {
      this.ps.addProfile(data).subscribe(
          (response: any) => {
              console.log(response);
          },
          (error) => {
              console.error('Error adding profile:', error);
          }
      );
  }
  

}
