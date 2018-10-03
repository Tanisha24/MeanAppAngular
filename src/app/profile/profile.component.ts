import { Component, OnInit } from '@angular/core';

import {AuthService} from '../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {RecordService} from '../services/record.service';

import { View } from '../shared/view.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Object;

  constructor(private authService:AuthService,
              private recordService:RecordService,
              private router: Router) { }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
      this.user = profile['user'];
      this.refreshUserReviews();
      console.log("In ngOnInit");
    },
     err => {
       console.log(err);
       return false;
     });

  }

  refreshUserReviews() {
    this.recordService.getViewList().subscribe((res) => {
      this.recordService.views = res as View[];
    });
}
onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.recordService.deleteUser(_id).subscribe((res) => {
        this.refreshUserReviews();
        //this.resetForm(form);
        //M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }


}
