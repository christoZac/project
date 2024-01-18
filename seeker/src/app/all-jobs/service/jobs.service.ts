import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { applyJob, job, savedjobs } from '../model/job';
import { saved } from '../model/save';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }
  getJob() {
    return this.http.get<job[]>(environment.baseUrl+'v1/jobs');
  }

  postSaved(jobId:any,data:any){
    // const jobId=data
    return this.http.post<job[]>(environment.baseUrl+'v1/job-seeker/SaveJob/'+jobId,data);

  }
  getSavedJob(jobTitle: string): Observable<savedjobs[]> {
    const url = `${environment.baseUrl}v1/job-seeker/jobseekerId/savedjobs`;
    
    
    const fullUrl = `${url}?JobTitle=${jobTitle}`;

    return this.http.get<savedjobs[]>(fullUrl);
  }
  // postJobapplication(jobid:any){
  //   return this.http.post<applyJob[]>(environment.baseUrl+'v1/job-seeker/job-application/'+jobid);

  // }

  
}
