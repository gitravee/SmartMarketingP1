import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from './common.service';  

import {Http,Response, Headers, RequestOptions } from '@angular/http';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.scss']  
})  
export class AppComponent {  
     
  constructor() {   }  
   
}