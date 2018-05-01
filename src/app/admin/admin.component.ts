import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private tags: Array<any> = [];
  constructor() {
    this.addNewTags();
  }

  ngOnInit() {

  }

  private addNewTags() {
    this.tags.push(
       {name: 'User Admin', type: 'active'},
       {name: 'Creative Admin', type: ''},
       {name: 'Report', type: ''},
       {name: 'Campaign Suppression', type: ''},
       {name: 'Order Administration', type: ''},
       {name: 'Accounting Admin', type: ''},
       {name: 'Forgot Password Admin', type: ''},
       {name: 'Message Admin', type: ''},
       {name: 'Enrollment Admin', type: ''},
   );
}
}
