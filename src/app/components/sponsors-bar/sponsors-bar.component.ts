import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sponsors-bar',
  templateUrl: './sponsors-bar.component.html',
  styleUrls: ['./sponsors-bar.component.scss']
})
export class SponsorsBarComponent implements OnInit {

  public sponsorBarCls: string;
  @Input() footerSponsor: boolean;
  @Input() profileSponsor: boolean;

  constructor() { }

  ngOnInit() {
    if (this.footerSponsor) {
      this.sponsorBarCls = 'fcm-footer-sponsors';
    } else {
      this.sponsorBarCls = 'fcm-profile-body-sponsors';
    }
  }
}
