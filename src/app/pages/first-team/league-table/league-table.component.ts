import { Component } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent {

  public teamStats: any = [{
    teamPosition: 1,
    teamName: 'FC Podunavac Borca',
    teamAvatar: '../../../../assets/img/test-badge.jpg',
    teamPlayed: 10,
    teamPoints: 30,
    teamWins: 8,
    teamDraws: 1,
    teamLoses: 1,
    teamGoalsScored: 25,
    teamGoalsAgainst: 5,
    teamGoalsDifference: 5
  }, {
    teamPosition: 2,
    teamName: 'FC Sloga Batocina',
    teamAvatar: '/assets/img/test-badge.jpg',
    teamPlayed: 2,
    teamPoints: 30,
    teamWins: 8,
    teamDraws: 1,
    teamLoses: 1,
    teamGoalsScored: 25,
    teamGoalsAgainst: 5,
    teamGoalsDifference: 5
  }, {
    teamPosition: 3,
    teamName: 'FC Donje Vlaole',
    teamAvatar: '/assets/img/test-badge.jpg',
    teamPlayed: 3,
    teamPoints: 12,
    teamWins: 7,
    teamDraws: 1,
    teamLoses: 1,
    teamGoalsScored: 25,
    teamGoalsAgainst: 5,
    teamGoalsDifference: 5
  }, {
    teamPosition: 4,
    teamName: 'FC Stragari FTW',
    teamAvatar: '/assets/img/test-badge.jpg',
    teamPlayed: 10,
    teamPoints: 30,
    teamWins: 8,
    teamDraws: 1,
    teamLoses: 1,
    teamGoalsScored: 25,
    teamGoalsAgainst: 5,
    teamGoalsDifference: 5
  }, {
    teamPosition: 5,
    teamName: 'FC Srbija Mannheim',
    teamAvatar: '/assets/img/test-badge.jpg',
    teamPlayed: 10,
    teamPoints: 30,
    teamWins: 8,
    teamDraws: 1,
    teamLoses: 1,
    teamGoalsScored: 25,
    teamGoalsAgainst: 5,
    teamGoalsDifference: 5,
    teamFCM: true
  }, {
    teamPosition: 6,
    teamName: 'FC Stevini Suljevi',
    teamAvatar: '/assets/img/test-badge.jpg',
    teamPlayed: 10,
    teamPoints: 30,
    teamWins: 8,
    teamDraws: 1,
    teamLoses: 1,
    teamGoalsScored: 25,
    teamGoalsAgainst: 5,
    teamGoalsDifference: 5
  }, {
    teamPosition: 7,
    teamName: 'FC Drkomani',
    teamAvatar: '/assets/img/test-badge.jpg',
    teamPlayed: 9,
    teamPoints: 22,
    teamWins: 12,
    teamDraws: 1,
    teamLoses: 1,
    teamGoalsScored: 22,
    teamGoalsAgainst: 8,
    teamGoalsDifference: 10
  }];
}
