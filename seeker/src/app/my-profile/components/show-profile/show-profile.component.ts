
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
  profileData:profile[]=[];
  selectedSkill: any;
  experience:Experience[]=[];
  profileDatas:profiles[] = [];
  addexperience!: FormGroup;
  submitted=false;
  qualification:Experience[]=[]
  resumes:resume[]=[]
  selectedFile: File | null = null;
  // adddata:Experiences[]=[];
  // experience:Experience[]=[];

  constructor(private route: ActivatedRoute, private ps: ProfileService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.profileId = params['id'];
      console.log('ID:', this.profileId);
      
      
    });

    this.getProfile();
    // this.getresume()
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
// getresume(){
//  this.ps.getResume(this.profileId).subscribe((response:any)=>{
//       this. resumes=response
//     console.log(this. resumes);

//    })
  
     
//  }
  addQualification(data:any){
    // console.log(data);
    const profileID=this.profileId
    
    this.ps.postQualification(profileID,data).subscribe((response:any)=>{
      this.qualification=response;
      console.log(this.qualification);
    })

  }
  
  // addResume(data:any){
  //   alert("hello")
  //   const profileID=this.profileId
  //   this.ps.postResume(profileID,data).subscribe((response:any)=>{
  //     this.resumes=response
  //   })
  // }
  
  addexp(data:any){
    console.log(data)
    this.profileId=this.profileId
    this.ps.postQualification(this.profileId,data).subscribe((response:any)=>{
      this.experience=response;
      console.log(this.qualification)

    })
  
  }

  // onFileSelected(event: any) {
  //   // Capture the selected file from the input event
  //   const files = event.target.files;
  //   if (files && files.length > 0) {
  //     this.selectedFile = files[0];
  //   }
  // }

  // addResume(profileName:any,profileSummary:any,title:any){
  //   const profileId=this.profileId

  //   this.ps.postResume(profileId,profileName,profileSummary,title,this.selectedFile).subscribe((response:any)=>{
  //     console.log(response);
      

  //   })

  // }




}
