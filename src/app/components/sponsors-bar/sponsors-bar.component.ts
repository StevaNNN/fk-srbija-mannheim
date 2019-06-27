import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sponsors-bar',
  templateUrl: './sponsors-bar.component.html',
  styleUrls: ['./sponsors-bar.component.scss']
})
export class SponsorsBarComponent implements OnInit {

  @Input() sponsorBarCls: any;

  constructor() { }

  ngOnInit() {
  }

}
