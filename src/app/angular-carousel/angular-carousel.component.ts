import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-carousel',
  templateUrl: './angular-carousel.component.html',
  styleUrls: ['./angular-carousel.component.scss']
})
export class AngularCarouselComponent {

  //The time to show the next photo
    public NextPhotoInterval:number = 5000;
    //Looping or not
    public noLoopSlides:boolean = false;
    //Photos
    public slides:Array<any> = [];

    constructor() {
            this.addNewSlide();
    }

    private addNewSlide() {
         this.slides.push(
            {image: '../../assets/Images/banner.jpg', header: 'Dealing with Volatility: What you need to know', text: 'Timely insights to help you manage risk when markets shift', subtext: 'Read our new report', link: '#'},
            {image: '../../assets/Images/banner2.jpg', header: 'Tax Reform and What it Means to our Clients', text: 'Hear from our thought leaders about what to expect in the coming year', subtext: 'Watch Video', link: '#'},
            {image: '../../assets/Images/banner3.jpg', header: 'International Markets Prepare to Take Flight', text: 'Rising wealth, new technology and government reforms are driving widespread implications', subtext: 'Read our new report', link: '#'}
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }

}
