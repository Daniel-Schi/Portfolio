import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuIsOpen: boolean = false;
  active = false;

  constructor(public translate: TranslateService){}

  
  toggleNavLink() {
    this.menuIsOpen = !this.menuIsOpen;
  
    const navbarBurgerLink = document.querySelector('.navbarBurgerLink') as HTMLElement;
  
    if (navbarBurgerLink) {
      navbarBurgerLink.classList.toggle('show');
    }
  
    if (!this.menuIsOpen) {
      this.resetBurgerIcon(); // Zurücksetzen des Burger-Icons, wenn das Menü geschlossen wird
    }
  }

  resetBurgerIcon() {
    const hamIcon = document.querySelector('.ham') as HTMLElement;
    if (hamIcon) {
      hamIcon.classList.remove('active');
    }
  }
}
