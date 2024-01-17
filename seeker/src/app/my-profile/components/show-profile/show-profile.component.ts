
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  
  profileDatas:profiles[] = []

  constructor(private route: ActivatedRoute, private ps: ProfileService,private router: Router,) {}

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

  addSkill(skillId: any) {
    console.log(skillId);
    this.ps.postSkill(this.profileId, skillId).subscribe((response) => {
      console.log(response)
      
    
    

    });

    
    this.showSkill()
  }    
  }

