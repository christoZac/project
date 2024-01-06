import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getProfile } from '../../model/profile';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent {
  profileData!: getProfile;
  profileId!: string;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.profileId = params['id']; 
      alert(this.profileId);
      console.log(this.profileId);
    });
  }

  
}
