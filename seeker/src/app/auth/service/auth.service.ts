import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { seekerReg } from 'src/app/auth/model/signUp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  postUser(userData:any){
    return this.http.post<seekerReg[]>(environment.baseUrl+'v1/job-seeker/signup',userData)

  }
}
