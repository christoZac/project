import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';
import { login, seekerReg, setPassword } from 'src/app/auth/model/signUp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getToken():any{
    return localStorage.getItem('accessToken')
  }

  register(userData:any):Observable<any>{
    return this.http.post<seekerReg[]>(environment.baseUrl+'v1/job-seeker/signup',userData,{observe: 'response'})
  }
  verifyEmail(signupId: string) {
    return this.http.get<seekerReg[]>(environment.baseUrl+'v1/job-seeker/signup/'+signupId+'/verify-email');
  }
  verifyPassword(password: string, signupId: string) {
    // const httpOptions = {
    //   headers: new HttpHeaders({'Content-Type': 'application/json'})
    // };
    const jsonString=JSON.stringify(password);
    return this.http.post<setPassword[]>(environment.baseUrl + 'v1/job-seeker/signup/' + signupId + '/set-password/',jsonString,{observe:'response'});
  }

  login(data:any){
    return this.http.post<any>(environment.baseUrl+'v1/job-seeker/login',data)
  }
  
  
}
