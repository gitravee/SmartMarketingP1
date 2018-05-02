import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
//import { PageNotFoundComponent } from '../../page-not-found.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'home',   component:HomeComponent},
  //  { path: '**', component: PageNotFoundComponent }
  ];

  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: true
  
        }
      )
    ],
    exports: [
      RouterModule
    ],
    providers: []
  })
  export class AppRoutingModule { }
  
  
  /*
  Copyright 2017-2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */