import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { RecordService } from './services/record.service';


@NgModule({
  declarations: [
    AppComponent,
  routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  HttpClientModule,

  FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
