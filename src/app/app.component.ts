import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor(public translate: TranslateService) {

  }

  ngOnInit(){
    AOS.init({});
  }
}
