import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.scss']
})
export class SocialBarComponent implements OnInit {

  @Input() socialBarCls: any;

  constructor() { }

  ngOnInit() {
  }

}
