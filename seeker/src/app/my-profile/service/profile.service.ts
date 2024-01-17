import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getProfile, profile, Skill } from '../model/profile';
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
  postExperience(data:any,profileId:any){
    const jobSeekerId=this.getItem()
    return this.http.post(environment.baseUrl+'v1/'+jobSeekerId+'/profile/'+profileId+'/Experience',data)
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
}
