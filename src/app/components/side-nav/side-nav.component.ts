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

  ngOnInit() {
  }

}
