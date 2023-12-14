import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  link(callLink: any) {
    window.open(callLink);
  };

  constructor(private scroller: ViewportScroller) { }

  scrollToTarget(target: string) {
    this.scroller.scrollToAnchor(target);
  }

  toTop() {
    window.scrollTo(0, 0);
  }
}
