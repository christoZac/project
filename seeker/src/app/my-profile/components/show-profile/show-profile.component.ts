
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
<<<<<<< HEAD

  
  profileDatas:profiles[] = []

  constructor(private route: ActivatedRoute, private ps: ProfileService,private router: Router,) {}
=======
  profileData:profile[]=[];
  selectedSkill: any;
  experience:Experience[]=[];
  resumes:resume[]=[]
  profileDatas:profiles[] = [];
<<<<<<< HEAD
  qualification:qualifications[]=[]
=======
  addexperience!: FormGroup;
  submitted=false;
  qualification:Experience[]=[]
  // adddata:Experiences[]=[];
  // experience:Experience[]=[];
>>>>>>> e8c9fc1d30d2a137215f5baabd1e66513c3b779c

  constructor(private route: ActivatedRoute, private ps: ProfileService,private formBuilder: FormBuilder) { }
>>>>>>> 883c4a1cfe08d57b571e095d5427457db682fcf0

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
    // alert("hi")
  //   this.ps.getSkill(this.profileId).subscribe((response:any)=>{
  //     this.skills=response
  //   console.log(this.skills);
  //   alert(this.skills)

  // })
  this.ps.getSkill(this.profileId).subscribe((getdata:Skill[])=>{
    this.skills=getdata


  })
  }

  viewSkills(){
    this.ps.gettingSkills().subscribe((response)=>{
      this.dropDownSkill=response
      console.log(this.dropDownSkill);
      
    })
  }

<<<<<<< HEAD
  addSkill(skillId: any) {
    console.log(skillId);
    this.ps.postSkill(this.profileId, skillId).subscribe((response) => {
      console.log(response)
      
    
    

    });

    
    this.showSkill()
  }    
=======
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
  
     
>>>>>>> 883c4a1cfe08d57b571e095d5427457db682fcf0
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
  
  addexp(data:any){
    console.log(data)
    this.profileId=this.profileId
    this.ps.postQualification(this.profileId,data).subscribe((response:any)=>{
      this.experience=response;
      console.log(this.qualification)

    })
  
  }
}
