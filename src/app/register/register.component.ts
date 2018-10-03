import { Component, OnInit } from '@angular/core';

import { ValidateService } from '../services/validate.service';
import {AuthService} from '../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  email: String;
  username: String;
  password: String;

  constructor(private flashMessagesService: FlashMessagesService,
              private validateService: ValidateService,
              private authService:AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user={
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };
    if(!this.validateService.validateRegister(user)){
      this.flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000 });
      //console.log("InValid user");
      return false;
    }
    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessagesService.show('Please enter a valid email!', { cssClass: 'alert-danger', timeout: 3000 });
    //  console.log("InValid email");
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data['success']){
        //console.log("Registered");
        this.flashMessagesService.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        //console.log("Something went wrong");
        this.flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  }

}
