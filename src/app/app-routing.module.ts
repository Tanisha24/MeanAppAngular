import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { Year2015Component } from './year2015/year2015.component';
import { Year2011Component } from './year2011/year2011.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  { path: 'year2015', component: Year2015Component, canActivate:[AuthGuard] },
  { path: 'mapbox', component: MapBoxComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  { path: 'year2011',   component: Year2011Component, canActivate:[AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Year2015Component,
                                  Year2011Component,
                                  HomeComponent,
                                  LoginComponent,
                                  RegisterComponent,
                                  NavbarComponent,
                                  ProfileComponent,
                                  AboutComponent,
                                MapBoxComponent]
