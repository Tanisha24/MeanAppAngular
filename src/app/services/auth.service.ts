import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtModule,JwtHelperService } from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  registerUser(user){
  /*  let headers = new Headers();
    console.log("In register Service");
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
      .pipe(map(res => res.json()));*/

      return this.http.post('users/register', user).pipe(map(res => res));
  }

  authenticateUser(user){
    return this.http.post('users/authenticate', user).pipe(map(res => res));
  }
  getProfile(){

    console.log("In Auth service getProfile");
    this.loadToken();
   console.log("In AuthToken");
    //console.log(this.authToken);

    let headers = new HttpHeaders({'Authorization': this.authToken, 'Content-Type': 'application/json'});
    return this.http.get('users/profile',{headers: headers}).pipe(map(res => res));
  }
loadToken(){
const token=localStorage.getItem('id_token');
this.authToken=token;

}

loggedIn(){

   if (localStorage.id_token == undefined ){
    //console.log('Hello');
    return true;
   } else {
  // console.log('Goodbye');
 const helper = new JwtHelperService();
 //console.log(helper.isTokenExpired(localStorage.id_token));
   return helper.isTokenExpired(localStorage.id_token); // other people are putting 'id_token'' here but it didn't work for me so i just put the localStorage item
   }
  }

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }
  logout(){
    console.log("In Auth service logout");
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
