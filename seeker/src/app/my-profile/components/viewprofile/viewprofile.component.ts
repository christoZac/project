import { Component, OnInit } from '@angular/core';
import { getProfile, profile } from '../../model/profile';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent {
  profileData: getProfile[] = [];

  constructor(private ps: ProfileService) {}

  ngOnInit() {
    this.showProfile();
  }

  showProfile() {
    this.ps.getProfile().subscribe((response: getProfile[]) => {
      this.profileData = response;
      console.log(this.profileData);
    });
  }
}
