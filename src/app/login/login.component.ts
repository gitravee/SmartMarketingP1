import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from '../common.service';  

import {Http,Response, Headers, RequestOptions } from '@angular/http';  
import * as $ from 'jquery'; 
import { timeout } from 'q';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('selectElem') el:ElementRef;

  constructor(private newService :CommonService, private router: Router) { }
  Repdata;  
  valbutton ="Save";  
  isMongoShow = false;

ngOnInit() {    
  this.newService.GetUser().subscribe(data =>  this.Repdata = data);
}  
  
ngAfterViewInit() {
  // setTimeout(()=>{
  //   console.log($(this.el.nativeElement).css('background-color','black'));
  // },1000);
}

onSave = function(user,isValid: boolean) {    
 user.mode= this.valbutton;  
  this.newService.saveUser(user)  
  .subscribe(data =>  {  alert(data.data);  
       
    this.ngOnInit();    
  }   
  , error => this.errorMessage = error )  
    
}      
edit = function(kk) {  
this.id = kk._id;  
this.name= kk.name;  
this.address= kk.address;  
this.valbutton ="Update";  
}  
  
delete = function(id) {  
this.newService.deleteUser(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  
  
toggel = function()
{
  this.isMongoShow = !this.isMongoShow;
}

myFunction = function(event: any)
{

  // $(window).click(function () {
  //   alert('ok');
  //   });

  var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

    // setTimeout(()=>{
    //   $(this.el.nativeElement).css('background-color','black');
    //   $('#myPopup')[0].classList.toggle("show");
    // },1000);
}

login = function(){
  this.router.navigate(['./home/dashboard']);
}

}
