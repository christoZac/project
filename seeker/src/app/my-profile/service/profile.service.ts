import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Experience, Experiences, getProfile, profile, resume, Skill } from '../model/profile';
=======
import { Experience,getProfile,profile,Skill} from '../model/profile';
>>>>>>> e8c9fc1d30d2a137215f5baabd1e66513c3b779c
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

<<<<<<< HEAD
  postSkill(profileId: string, skillId: string):Observable<Skill[]> {
    const requestBody = {
       skillId
    };
    const jobSeekerId = this.getItem();
    return this.http.post<Skill[]>(environment.baseUrl + 'v1/' + jobSeekerId + '/profile/' + profileId + '/skills',  requestBody );
  }  
=======
  postSkill(profileId:string,id:string){
    const jobSeekerId=this.getItem()
    const requestbody=[id]
    return this.http.post<Skill[]>(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/skills',requestbody)
  }
  

experienceget(profileId:any){
  const jobSeekerId=this.getItem()
    return this.http.get(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/Experince')
  }

<<<<<<< HEAD

postQualification(profileId:any,data:any){
  
  const jobSeekerId=this.getItem()
  return this.http.post(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/Qualification',data)


}
getResume(profileId:any){
  return this.http.get(environment.baseUrl+'v1/job-seeker/getResume/'+profileId)
=======
  resumeget(profileId:any){
    
      return this.http.get(environment.baseUrl+'v1/job-seeker/getResume/'+profileId)
    }

    postQualification(profileId:any,data:any){
      const jobSeekerId=this.getItem()
      
      return this.http.post(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/Experience',data)
    }
>>>>>>> e8c9fc1d30d2a137215f5baabd1e66513c3b779c
}

postResume(profileID:any,file:any){

  const headers = new HttpHeaders({
    'profileName': 'string', 
    'profileSummary': 'string',
    'title': 'string',
    
  });
  const formData = new FormData();
  formData.append('file', file);
  return this.http.post<resume[]>(environment.baseUrl+'v1/job-seeker/upload-resume'+{headers},formData)

}
>>>>>>> 883c4a1cfe08d57b571e095d5427457db682fcf0
}
