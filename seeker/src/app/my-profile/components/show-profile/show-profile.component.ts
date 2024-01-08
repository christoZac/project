
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../service/profile.service';
import { profiles } from '../../model/profile_model';


@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent {
  profileId!: string;
  
  profileDatas:profiles[] = []

  constructor(private route: ActivatedRoute, private ps: ProfileService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.profileId = params['id'];
      console.log('ID:', this.profileId);
      
    });
    this.getProfile();
  }
  getProfile() {
    this.ps.jobSeekerProfile().subscribe((response: any) => {
     
      if (Array.isArray(response)) {
      
        this.profileDatas = response;
      } else if (typeof response === 'object' && response !== null) {
       
        this.profileDatas = [response];
      } 
  
      console.log(this.profileDatas);
    });
  }
  
  
     
  }

