import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill, profile } from '../../model/profile';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  profileId!: string;
  dropDownSkill:Skill[]=[];
  skills:Skill[]=[];
  profileData:profile[]=[];
  selectedSkill: any;

  

  constructor(private route: ActivatedRoute, private ps:ProfileService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.profileId = params['id'];
      console.log('ID:', this.profileId);
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
}
