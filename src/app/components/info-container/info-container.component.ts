import { Component, Input, OnInit } from '@angular/core';

@Component ({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss']
})
export class InfoContainerComponent implements OnInit {

  @Input() confing: any;

  constructor() {
  }

  ngOnInit() {
  }

}
