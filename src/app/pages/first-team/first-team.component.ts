import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-team',
  templateUrl: './first-team.component.html',
  styleUrls: ['./first-team.component.scss']
})
export class FirstTeamComponent implements OnInit {

  public headerConfing: any = {
    backgroundImage: '/assets/img/squad-hero.jpg',
    type: 'Interview',
    acter: 'Juan Bernat',
    title: 'The coach put his faith in me',
    btnText: 'Read more',
    context: 'squad'
  };

  public sponsorCls = 'fcm-profile-body-sponsors';

  constructor() { }

  ngOnInit() {
  }

}
