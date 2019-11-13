import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable()
export class AuthService {

  domain = "http://localhost:3000"; // Development Domain - Not Needed in Production

  constructor(
    private http: HttpClient
  ) { }




  // Function to register user accounts
  registerUser(user) : Observable<any> {
    return this.http.post<any>(this.domain + '/authentication/register', user).pipe(
      tap( res => console.log( res))
    )
    
  
  }

  // Function to check if username is taken
  checkUsername(username):Observable<any> {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username).pipe(
      tap( res => console.log( res))
    )
  }

  // Function to check if e-mail is taken
  checkEmail(email):Observable<any> {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email).pipe(
      tap( res => console.log( res))
    )
  }



}
