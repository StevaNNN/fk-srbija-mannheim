import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../state';
import * as EventsActions from '../../state/actions/events.actions';
import * as PlayersActions from '../../state/actions/players.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public headerConfing: any = {
    backgroundImage: '/assets/img/fc-serbia-mannheim.jpg',
    type: 'Interview',
    acter: 'Juan Bernat',
    title: 'The coach put his faith in me',
    btnText: 'Read more'
  };

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new EventsActions.LoadEvents());
    this.store.dispatch(new PlayersActions.LoadPlayers());
    this.store.dispatch(new PlayersActions.LoadStaffs());
  }

}
