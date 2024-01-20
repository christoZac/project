import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience,getProfile,profile,Skill} from '../model/profile';
import { environment } from 'src/app/environment/environment';
import { Observable } from 'rxjs';
import { profiles } from '../model/profile_model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }


  getItem():any{
    return localStorage.getItem('id')  
  }

  getProfile(){
    const jobSeekerId=this.getItem()
    return this.http.get<getProfile[]>(environment.baseUrl+'v1/GetJobSeekerProfile/'+jobSeekerId)
  }




  addProfile(id: any){
    return this.http.post(environment.baseUrl + 'v1/AddProfile', id);
  }

  jobSeekerProfile(){
    const jobSeekerId=this.getItem()
    return this.http.get(environment.baseUrl+'v1/'+jobSeekerId+'/profile')
  }
  getSkill(profileId:any){
    const jobSeekerId=this.getItem()
    return this.http.get<Skill[]>(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/skills')
  }
 
  gettingSkills(){
    return this.http.get<Skill[]>(environment.baseUrl+'v1/skills')
  }


  postSkill(profileId: string, skillId: string):Observable<Skill[]> {
    const requestBody = {
       skillId
    };
    const jobSeekerId = this.getItem();
    return this.http.post<Skill[]>(environment.baseUrl + 'v1/' + jobSeekerId + '/profile/' + profileId + '/skills',  requestBody );
  }  

  

experienceget(profileId:any){
  const jobSeekerId=this.getItem()
    return this.http.get(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/Experince')
  }

  resumeget(profileId:any){
    
      return this.http.get(environment.baseUrl+'v1/job-seeker/getResume/'+profileId)
    }

    postQualification(profileId:any,data:any){
      const jobSeekerId=this.getItem()
      
      return this.http.post(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/Experience',data)
    }

    postResume(profileId:any,profileName:any,profileSummary:any,title:any,file:any){
      const jobSeekerId=this.getItem()
      const formData = new FormData();
      formData.append('file', file,file.name);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
      return this.http.post(environment.baseUrl+'v1/job-seeker/upload-resume?jobSeekerId='+jobSeekerId+'&profileId='+profileId+'&profileName='+profileName+'&profileSummary='+profileSummary+'&title='+title,formData,{headers:headers})

    }
}

















//// postResume(profileID:any,file:any){

//   const headers = new HttpHeaders({
//     'profileName': 'string', 
//     'profileSummary': 'string',
//     'title': 'string',
    
//   });
//   const formData = new FormData();
//   formData.append('file', file);
//   return this.http.post<resume[]>(environment.baseUrl+'v1/job-seeker/upload-resume'+{headers},formData)

// }
// }
