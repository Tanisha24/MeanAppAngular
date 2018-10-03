import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authService:AuthService, private router:Router){

  }

  canActivate() {
    if(!this.authService.loggedIn()) {
    //  console.log("I am logged Out");
      return true;
    } else {
      this.router.navigate(['/login']);
      //console.log("I am logged In");
      return false;
    }
  }
}
