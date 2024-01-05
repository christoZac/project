import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getProfile } from '../../model/profile';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent {
  profile!:getProfile
  profileId!: string;

  constructor(private route: ActivatedRoute, private router:Router){
    // getId(data:any){
      // console.log(data);
      // alert(data)
    
  }
  }
// }
