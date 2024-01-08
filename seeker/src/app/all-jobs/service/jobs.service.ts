import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { job } from '../model/job';
import { saved } from '../model/save';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }
  getJob() {
    return this.http.get<job[]>(environment.baseUrl+'v1/jobs');
  }

  postSaved(data:any){
    return this.http.post<job[]>(environment.baseUrl+'v1/job-seeker/SaveJob/'+data,data);

  }
  getSavedJob() {
    return this.http.get<job[]>(environment.baseUrl+'v1/job-seeker/jobseekerId/savedjobs');
  }
}
