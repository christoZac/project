import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../../model/profile';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  profileId!: string;
  skills:Skill[]=[]
  

  constructor(private route: ActivatedRoute, private ps:ProfileService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.profileId = params['id'];
      console.log('ID:', this.profileId);
    });

    this.showSkill();
  }

  showSkill(){
    this.ps.getSkill(this.profileId).subscribe((response:any)=>{
      this.skills=response
    console.log(this.skills);
  })
  }

  showExp(data:any){
    this.ps.postExperience(this.profileId,data).subscribe((Response:any)=>{
      this.showExp=Response
      console.log(this.showExp);
    })
  }
}
