import { HttpClient } from '@angular/common/http';
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

  postSkill(profileId:string,id:string){
    const jobSeekerId=this.getItem()
    const requestbody=[id]
    return this.http.post<Skill[]>(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/skills',requestbody)
  }
  

experienceget(profileId:any){
  const jobSeekerId=this.getItem()
    return this.http.get(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/Experince')
  }

  resumeget(profileId:any){
    
      return this.http.get(environment.baseUrl+"v1/job-seeker/getResume/"+profileId)
    }

    postQualification(profileId:any,data:any){
      const jobSeekerId=this.getItem()
      
      return this.http.post(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/Experience',data)
    }
}

