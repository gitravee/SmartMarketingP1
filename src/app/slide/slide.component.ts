import { Component, OnInit,Input, HostBinding } from '@angular/core';
import {CarouselComponent, Direction} from  '../carousel/carousel.component';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {

  @Input() public index:number;
  @Input() public direction:Direction;

  @HostBinding('class.active')
  @Input() public active:boolean;

  @HostBinding('class.item')
  @HostBinding('class.carousel-item')
  private addClass:boolean = true;

  constructor(private carousel:CarouselComponent) {
  }

  public ngOnInit() {
      this.carousel.addSlide(this);
  }

  public ngOnDestroy() {
      //this.carousel.removeSlide(this);
  }

}
