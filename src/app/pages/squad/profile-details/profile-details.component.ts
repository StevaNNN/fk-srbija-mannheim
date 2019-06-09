import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component ({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  private profile: any;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe (params => {
      this.profile = {
        id: 20,
        name: 'Kylian',
        surname: 'Mbappe',
        birthday: '20 December 1998',
        birthCity: 'Paris',
        height: '178cm',
        weight: '73kg',
        nationality: 'French',
        skills: 'Right',
        image: '/assets/img/players/card-mbappe.jpg',
        numberBackgroundImage: '/assets/img/players/details/number-mbappe7.jpg',
        position: 'Forward',
        number: 7,
        statistic: {
          appearances: 43,
          minutes_played: 3520,
          goals: 39,
          assists: 15
        }
      };
    });
  }

  ngOnInit() {
  }

  getNationalFlage() {
    return `fcm-nationality-flag-${this.profile.nationality.toLowerCase ()}`;
  }
}
