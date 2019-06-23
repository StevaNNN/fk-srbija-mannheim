import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PlayersService} from '../services/players.service';
import * as PlayersActions from '../actions/players.actions';
import {catchError, distinct, switchMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PlayersEffects {

  constructor(private actions$: Actions,
              private service: PlayersService) {
  }

  @Effect()
  getPlayers = this.actions$.pipe(
    ofType<PlayersActions.LoadPlayers>(PlayersActions.PlayersActionTypes.LoadPlayers),
    distinct(() => PlayersActions.PlayersActionTypes.LoadPlayers, this.actions$.pipe(ofType(
      PlayersActions.PlayersActionTypes.LoadPlayersFailure,
      PlayersActions.PlayersActionTypes.LoadPlayersSuccess,
    ))),
    switchMap(action =>
      this.service.getPlayers()
        .pipe(
          map((data: any) => new PlayersActions.LoadPlayersSuccess(data)),
          catchError((error) => of(new PlayersActions.LoadPlayersFailure(error)))
        ))
  );

  @Effect()
  getStaffs = this.actions$.pipe(
    ofType<PlayersActions.LoadStaffs>(PlayersActions.PlayersActionTypes.LoadStaffs),
    distinct(() => PlayersActions.PlayersActionTypes.LoadStaffs, this.actions$.pipe(ofType(
      PlayersActions.PlayersActionTypes.LoadStaffsFailure,
      PlayersActions.PlayersActionTypes.LoadStaffsSuccess,
    ))),
    switchMap(action =>
      this.service.getStaffs()
        .pipe(
          map((data: any) => new PlayersActions.LoadStaffsSuccess(data)),
          catchError((error) => of(new PlayersActions.LoadStaffsFailure(error)))
        ))
  );
}
