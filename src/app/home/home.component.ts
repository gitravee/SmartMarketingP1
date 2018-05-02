import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   url: string;
   public routingArr: Array<string> =  [];
    ishome: string;
    isother: string;
  constructor( private route: ActivatedRoute,
    private router: Router, ) {
      this.router.events.subscribe((event: any) => {
        console.log('event.url', event.url); // This will give you the required url
        if (event.url !== undefined)
        {
          var arr: Array<string> = event.url.split('/');
          if (arr.length > 1) {
            this.ishome = arr[1];
          }
          if (arr.length > 2) {
            this.isother = arr[2];
          }
        }

        console.log(' this.routingArr :- ',  this.routingArr);
    });
    }

  ngOnInit() {
    if(this.router.url === "/home")  this.router.navigate(['./home/dashboard']);
    console.log('url:- ', this.router.url);
  }

}
