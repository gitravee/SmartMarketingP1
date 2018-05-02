import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isActive = true;

  tags: Array<any> = [];
  constructor() {
    this.addNewTags();
  }

  ngOnInit() {

  }

  private addNewTags() {
    this.tags.push(
       {name: 'User Admin', type: 'active', imageUrl: '../../assets/Images/shutterstock_514837642.jpg'},
       {name: 'Creative Admin', type: '', imageUrl: '../../assets/Images/shutterstock_271819475.jpg'},
       {name: 'Report', type: '', imageUrl: '../../assets/Images/shutterstock_518338252.jpg'},
       {name: 'Campaign Suppression', type: '', imageUrl: '../../assets/Images/shutterstock_644351350.jpg'},
       {name: 'Order Admin', type: '', imageUrl: '../../assets/Images/shutterstock_530490646.jpg'},
       {name: 'Accounting Admin', type: '', imageUrl: '../../assets/Images/shutterstock_1007741038.jpg'},
       {name: 'Forgot Password Admin', type: '', imageUrl: '../../assets/Images/shutterstock_589177202.jpg'},
       {name: 'Message Admin', type: '', imageUrl: '../../assets/Images/shutterstock_1007741038.jpg'},
       {name: 'Enrollment Admin', type: '', imageUrl: '../../assets/Images/shutterstock_493652863.jpg'},
   );
}
}
