import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() navbarOpen: any;

  public dropdownOpen = false;

  constructor() { }

  public toogleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  public closeSideMenuOnActive(event) {
    const btn = event.target.classList.contains('active');
    const navLink = document.querySelector('.fcm-side-menu');
    const header = document.querySelector('.fcm-navbar');
    const closeBtn = document.querySelector('.close-white-big-icon');
    const dropDown = document.querySelector('.fcm-side-nav-dropdown-menu');
    const dropDownIcon = document.querySelector('.keyboard-arrow-up-icon');
    if (btn) {
      navLink.classList.remove('show');
      header.classList.remove('side-menu-open');
      closeBtn.classList.remove('close-white-big-icon');
      closeBtn.classList.add('menu-white-big-icon');
      dropDown.classList.remove('show');
      dropDownIcon.classList.remove('keyboard-arrow-up-icon');
      dropDownIcon.classList.add('keyboard-arrow-down-icon');
    }
  }

  ngOnInit() {
  }

}
