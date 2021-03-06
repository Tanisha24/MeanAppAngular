import { Component, OnInit } from '@angular/core';

import {AuthService} from '../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private flashMessagesService: FlashMessagesService,
              private authService:AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    //console.log("You are now logged out");
    this.flashMessagesService.show('You are now logged out', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }

}
