import { Component, Input, OnInit } from '@angular/core';

@Component ({
  selector: 'app-profile-details-header',
  templateUrl: './profile-details-header.component.html',
  styleUrls: ['./profile-details-header.component.scss']
})
export class ProfileDetailsHeaderComponent implements OnInit {

  @Input () confing: any;

  constructor() {
  }

  ngOnInit() {
  }

}