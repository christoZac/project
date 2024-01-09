import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../service/profile.service';
import { Experience } from '../../model/profile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  
 

  addexperienceform!: FormGroup;
    submitted=false;
    experience:Experience[]=[];
    
   
  constructor(private formBuilder: FormBuilder, private profile:ProfileService ,private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.addexperienceform = this.formBuilder.group({
        name: ['', Validators.required],
       task: ['', Validators.required],
       start: ['', Validators.required],
       end: ['', Validators.required],
       status: ['', Validators.required],
      
       
      });
       
    }


    showExp(data:any){
      this.profile.postExperience(this.profile,data).subscribe((Response:any)=>{
        this.showExp=Response
        console.log(this.showExp);
      })
    }


}
