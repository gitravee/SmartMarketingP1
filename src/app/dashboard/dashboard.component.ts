import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('selectElem') el: HTMLElement;
  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   // Activate Carousel
    //   $('#myCarousel').carousel();

    //   // Enable Carousel Indicators
    //   $('.item1').click(function() {
    //     $('#myCarousel').carousel(0);
    //   });
    //   $('.item2').click(function() {
    //     $('#myCarousel').carousel(1);
    //   });

    //   // Enable Carousel Controls
    //   $('.left').click(function() {
    //     $('#myCarousel').carousel('prev');
    //   });
    //   $('.right').click(function() {
    //     $('#myCarousel').carousel('next');
    //   });

    //  }, 5000);
  }

  ngAfterViewInit () {
    // setTimeout(()=>{
    //   console.log($(this.el.nativeElement).css('background-color','black'));
    // },1000);
  }

  myFunction = function(event: any)
  {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

  }

}
