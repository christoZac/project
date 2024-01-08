import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getProfile, profile } from '../../model/profile';
import { ProfileService } from '../../service/profile.service';
import { profiles } from '../../model/profile_model';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent {
  profileData: profiles[] = [];
  profileId!:string

  constructor(private ps: ProfileService,private router:Router,private route: ActivatedRoute) {}

  ngOnInit() {
    this.showProfile();
}
getId(data: getProfile): void {
  const profileId = data.id;
  this.router.navigate(['/show', profileId]);
}

  showProfile() {
    this.ps.getProfile().subscribe((response: profiles[]) => {
      this.profileData = response;
      console.log(this.profileData);
    });
  }
  


}
