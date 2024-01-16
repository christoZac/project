
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../service/profile.service';
import { profiles } from '../../model/profile_model';
import { Experience, Skill, profile, qualifications, resume } from '../../model/profile';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent {
  profileId!: string;
  dropDownSkill:Skill[]=[];
  skills:Skill[]=[];
  profileData:profile[]=[];
  selectedSkill: any;
  experience:Experience[]=[];
  resumes:resume[]=[]
  profileDatas:profiles[] = [];
  qualification:qualifications[]=[]

  constructor(private route: ActivatedRoute, private ps: ProfileService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.profileId = params['id'];
      console.log('ID:', this.profileId);
      
    });
    this.getProfile();
    this.getresume()
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
    this.getexp();
  }

  showSkill(){
    this.ps.getSkill(this.profileId).subscribe((response:any)=>{
      this.skills=response
    console.log(this.skills);
  })
  }

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
  
    })
  }
  getexp(){
    this.ps.experienceget(this.profileId).subscribe((response:any)=>{
      this.experience=response
      console.log(this.experience);

  })
  
     
  }
getresume(){
 this.ps.getResume(this.profileId).subscribe((response:any)=>{
      this. resumes=response
    console.log(this. resumes);

   })
  
     
 }
  addQualification(data:any){
    // console.log(data);
    const profileID=this.profileId
    
    this.ps.postQualification(profileID,data).subscribe((response:any)=>{
      this.qualification=response;
      console.log(this.qualification);
    })

  }
  
  addResume(data:any){
    alert("hello")
    const profileID=this.profileId
    this.ps.postResume(profileID,data).subscribe((response:any)=>{
      this.resumes=response
    })
  }
  
}
