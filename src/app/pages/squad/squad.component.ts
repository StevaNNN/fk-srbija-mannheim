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
    title: 'The coach put his faith in me',
    btnText: 'Read more'
  };

  public selectActive = false;

  constructor() {
  }

  toogleSlelectActive() {
    this.selectActive = !this.selectActive;
  }

  handleActiveButton(event) {
    const active = document.querySelector('.btn-group .active');
    if (active) {
      active.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
  }

  ngOnInit() {
  }

}
