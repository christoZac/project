
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../service/profile.service';
import { profiles } from '../../model/profile_model';
import { Experience, Skill, profile, resume} from '../../model/profile';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  addexperience!: FormGroup;
  submitted=false;
  qualification:Experience[]=[]
  // adddata:Experiences[]=[];
  // experience:Experience[]=[];

  constructor(private route: ActivatedRoute, private ps: ProfileService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.profileId = params['id'];
      console.log('ID:', this.profileId);
      
      
    });
    this.addexperience = this.formBuilder.group({
      jobTitle: [''],
      companyName: [''],
      summary: [''],
      serviceStart: [''],
      serviceEnd: [''],
    })
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

  addSkill(id:any){
    this.showSkill();
    console.log(id);
    const profileId=this.profileId  
    this.ps.postSkill(profileId,id).subscribe((response)=>{
      console.log(profileId);
      
      console.log(response);
     
    })  
    
  }
  getexp(){
    this.ps.experienceget(this.profileId).subscribe((response:any)=>{
      this.experience=response
      console.log(this.qualification);

  },
  (error) => {
    console.error("Failed to add skills:", error);
  })
  
     
  }
  getresume(){
    this.ps.resumeget(this.profileId).subscribe((response:any)=>{
      this. resumes=response
      console.log(this. resumes);

  })
  
     
  }
  
  addexp(data:any){
    console.log(data)
    this.profileId=this.profileId
    this.ps.postQualification(this.profileId,data).subscribe((response:any)=>{
      this.experience=response;
      console.log(this.qualification)

    })
  
  }
}
