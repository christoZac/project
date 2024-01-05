import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { job } from '../model/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }
  getJob() {
    return this.http.get<job[]>(environment.baseUrl+'v1/jobs');
  }
  getsaved(){
    return this.http.get<job[]>(environment.baseUrl+'v1/job-seeker/jobseekerId/savedjobs');

  }
}
