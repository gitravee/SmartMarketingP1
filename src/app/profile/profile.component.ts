import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor() {
    document.body.style.backgroundImage = 'url("../../assets/Images/Profile-BG.jpg")';
  }

  ngOnInit() {
  }

  ngOnDestroy () {
    document.body.style.backgroundImage = 'none';
  }

}