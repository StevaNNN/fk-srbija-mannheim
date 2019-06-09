import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {

  public headerConfing: any = {
    backgroundImage: '/assets/img/squad-hero.jpg',
    type: 'Interview',
    acter: 'Juan Bernat',
    title: 'The coach put his faith in me'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
