import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {RecordService} from '../services/record.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { View } from '../shared/view.model';

@Component({
  selector: 'app-year2015',
  templateUrl: './year2015.component.html',
  styleUrls: ['./year2015.component.css']
})
export class Year2015Component implements OnInit {

  constructor(private flashMessagesService: FlashMessagesService,
              private recordService:RecordService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshViewList();
  }
  onReviewSubmit(form: NgForm){
    const user=localStorage.getItem('user');
    var json = JSON.parse(user);
    //var json1=JSON.parse(form.value);

   const view={
     username: json['username'],
     review: form.value['review'],
     year: 2015
   };
   console.log(view);
   this.recordService.registerView(view).subscribe(data => {
     if(data['success']){
       //console.log("Registered");
       this.flashMessagesService.show('Your view is registered', {cssClass: 'alert-success', timeout: 3000});
       this.refreshViewList();
       //this.router.navigate(['/login']);
     } else {
       //console.log("Something went wrong");
       this.flashMessagesService.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       this.refreshViewList();
       //this.router.navigate(['/register']);
     }
   });

  }
  refreshViewList() {
        this.recordService.getViewList().subscribe((res) => {
          this.recordService.views = res as View[];
          console.log(res);
        });
      }
  resetForm(form?: NgForm) {
          if (form)
            form.reset();

    }

}
