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
        jobTitle: ['', Validators.required],
        companyName: ['', Validators.required],
        summary: ['', Validators.required],
        serviceStart: ['', Validators.required],
        serviceEnd: ['', Validators.required],
       
       
      });
       
    }


    showExp(data:any){
      this.profile.postexperience(this.profile,data).subscribe((Response:any)=>{
        this.experience=Response
        console.log(this.experience);
      })
      alert("hello")
    }


}
