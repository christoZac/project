
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../service/profile.service';
import { profiles } from '../../model/profile_model';
import { Skill } from '../../model/profile';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent {
  profileId!: string;
  dropDownSkill:Skill[]=[];
  skills:Skill[]=[];
  selectedSkill: any;

  
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

    this.showSkill();
    this.viewSkills()
  }

  showSkill(){
    this.ps.getSkill(this.profileId).subscribe((response:any)=>{
      this.skills=response
    console.log(this.skills);
  })
  }

<<<<<<< HEAD
  showExp(data:any){
    this.ps.postExperience(this.profileId,data).subscribe((Response:any)=>{
      this.showExp=Response
      console.log(this.showExp);
=======
  viewSkills(){
    this.ps.gettingSkills().subscribe((response)=>{
      this.dropDownSkill=response
      console.log(this.dropDownSkill);
      
    })
  }

  addSkill(profileId:any , id:any){
    this.ps.postSkill(profileId,id).subscribe((response:any)=>{
      this.skills=response
      console.log(this.skills);
  
>>>>>>> d417220daa77d7a3672ee5e2449c7f7f25775301
    })
  }
  
  
     
  }

