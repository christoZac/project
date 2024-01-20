import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getProfile, resume } from '../../model/profile';
import { ProfileService } from '../../service/profile.service';
import { profiles } from '../../model/profile_model';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent {
  profileData: getProfile[] = [];
  profileId!:string
  selectedFile!: resume 
// export class ViewprofileComponent implements OnInit {
//   profileData: getProfile[] = [];

  constructor(private ps: ProfileService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.showProfile();
}
getId(data: getProfile): void {
  const profileId = data.id;
  this.router.navigate(['/show', profileId]);
}

  showProfile() {


    this.ps.getProfile().subscribe((response: getProfile[]) => {
      this.profileData = response;
      console.log(this.profileData);

    });
  }
  upload:boolean=true

  uploadFile(event: any,data: getProfile): void {    
    const file = event.target.files[0];
     const profileId = data.id;
     const profileName = data.profileName;
     const profileSummary = data.profileSummary;
     const title = "CV"
     this.ps.postResume(profileId, profileName, profileSummary, title,file).subscribe((response: any) => {
         console.log(response);
         this.selectedFile=response
         console.log(this.selectedFile);
         
         alert("Resume Added Successfully")
         if (this.upload &&(data.id && data.resumeId )) {
          this.upload = false;
        }
         
       });

 }


 





  

  // addResume(data: getProfile,file:any) {
  //   const profileId = data.id;
  //   cons   t profileName = data.profileName;
  //   const profileSummary = data.profileSummary;
    
  //   console.log(profileName);
  //         const title = "CV"
        
  //     this.ps.postResume(profileId, profileName, profileSummary, title,file).subscribe((response: any) => {
  //       console.log(response);
  //     });
  // }
  
}

 
