import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { profile } from '../model/profile';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  addProfile(id:any){
    return this.http.post<profile[]>(environment.baseUrl+'v1/AddProfile',id)

    
  }
}
