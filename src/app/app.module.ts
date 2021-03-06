import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';

import {CommonService} from './common.service';
import { LoginComponent } from './login/login.component';

import { Router } from '@angular/router';
import { AppRoutingModule }        from './app-routing.module';
import { HomeModule } from './home/home.module';
import {ChartModule} from 'primeng/chart';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableModule} from 'primeng/datatable';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,AppRoutingModule,HomeModule,ChartModule,BrowserAnimationsModule,DataTableModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
