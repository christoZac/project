import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { applies } from '../model/application';
import { environment } from 'src/app/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http:HttpClient) { }

  getItem():any{
    return localStorage.getItem('id')  
  }
 
    getapplicant(jobTitle: string): Observable<applies[]> {
      const jobSeekerId = this.getItem();
      const url = `${environment.baseUrl}v1/job-seeker/${jobSeekerId}/job-application?JobTitle=${jobTitle}`;
  
      return this.http.get<applies[]>(url);
    }
 
}
