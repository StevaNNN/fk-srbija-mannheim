import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {

  public headerConfing: any = {
    backgroundImage: '/assets/img/squad-hero.jpg',
    type: 'Interview',
    acter: 'Juan Bernat',
    title: 'The coach put his faith in me',
    btnText: 'Read more'
  };

  constructor() { }

  ngOnInit() {
  }

}
