import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience, Experiences, getProfile, profile, resume, Skill } from '../model/profile';
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

  postSkill(data:any,profileId:any)
  {
    const jobSeekerId=this.getItem()
    return this.http.post(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/skills',data)

  }
  
  postexperience(profileId:any,data:any){
    const jobSeekerId=this.getItem()
    return this.http.post<Experiences[]>(environment.baseUrl+'v1/'+jobSeekerId/+'/profile/'+profileId+'/Experience',data)

  }
experienceget(profileId:any){
  const jobSeekerId=this.getItem()
    return this.http.get(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/Experince')
  }


postQualification(profileId:any,data:any){
  
  const jobSeekerId=this.getItem()
  return this.http.post(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/Qualification',data)


}
getResume(profileId:any){
  return this.http.get(environment.baseUrl+'v1/job-seeker/getResume/'+profileId)
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
}
