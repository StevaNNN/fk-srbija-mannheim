import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public headerConfing: any = {
    backgroundImage: 'assets/img/test.jpg',
    type: 'Interview',
    acter: 'Juan Bernat',
    title: 'The coach put his faith in me'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
