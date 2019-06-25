import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixtures-and-results',
  templateUrl: './fixtures-and-results.component.html',
  styleUrls: ['./fixtures-and-results.component.scss']
})
export class FixturesAndResultsComponent implements OnInit {

  public teamsScore: any = [
    {
      playedDate: '26.6 JUN',
      teamLeftName: 'FC Barcelona',
      teamLeftAvatar: '../../../../assets/img/test-badge.jpg',
      teamLeftScore: 1,
      teamRightScore: 2,
      teamRightName: 'FC Mannheim',
      teamRightAvatar: '../../../../assets/img/test-badge.jpg'
    },
    {
      playedDate: '26.6 JUN',
      teamLeftName: 'FC Barcelona',
      teamLeftAvatar: '../../../../assets/img/test-badge.jpg',
      teamLeftScore: 1,
      teamRightScore: 2,
      teamRightName: 'FC Mannheim',
      teamRightAvatar: '../../../../assets/img/test-badge.jpg'
    },
    {
      playedDate: '26.6 JUN',
      teamLeftName: 'FC Barcelona',
      teamLeftAvatar: '../../../../assets/img/test-badge.jpg',
      teamLeftScore: 1,
      teamRightScore: 2,
      teamRightName: 'FC Mannheim',
      teamRightAvatar: '../../../../assets/img/test-badge.jpg'
    },
    {
      playedDate: '26.6 JUN',
      teamLeftName: 'FC Barcelona',
      teamLeftAvatar: '../../../../assets/img/test-badge.jpg',
      teamLeftScore: 1,
      teamRightScore: 2,
      teamRightName: 'FC Mannheim',
      teamRightAvatar: '../../../../assets/img/test-badge.jpg'
    },
    {
      playedDate: '26.6 JUN',
      teamLeftName: 'FC Barcelona',
      teamLeftAvatar: '../../../../assets/img/test-badge.jpg',
      teamLeftScore: 1,
      teamRightScore: 2,
      teamRightName: 'FC Mannheim',
      teamRightAvatar: '../../../../assets/img/test-badge.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
