import {Action} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';

export enum PlayersActionTypes {
  LoadPlayers = '[Players] Load Players',
  LoadPlayersFailure = '[Players] Load Players Failure',
  LoadPlayersSuccess = '[Players] Load Players Success',
  LoadStaffs = '[Players] Load LoadStaffs',
  LoadStaffsFailure = '[Players] Load Staffs Failure',
  LoadStaffsSuccess = '[Players] Load Staffs Success',
  LoadPlayer = '[Players] Load Player',
  LoadPlayerFailure = '[Players] Load Player Failure',
  LoadPlayerSuccess = '[Players] Load Player Success',
}

export class LoadPlayers implements Action {
  readonly type = PlayersActionTypes.LoadPlayers;
}

export class LoadPlayersFailure implements Action {
  readonly type = PlayersActionTypes.LoadPlayersFailure;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class LoadPlayersSuccess implements Action {
  readonly type = PlayersActionTypes.LoadPlayersSuccess;

  constructor(public payload: any) {
  }
}


export class LoadStaffs implements Action {
  readonly type = PlayersActionTypes.LoadStaffs;
}

export class LoadStaffsFailure implements Action {
  readonly type = PlayersActionTypes.LoadStaffsFailure;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class LoadStaffsSuccess implements Action {
  readonly type = PlayersActionTypes.LoadStaffsSuccess;

  constructor(public payload: any) {
  }
}


export class LoadPlayer implements Action {
  readonly type = PlayersActionTypes.LoadPlayer;

  constructor(public payload: { id: string }) {
  }
}

export class LoadPlayerFailure implements Action {
  readonly type = PlayersActionTypes.LoadPlayerFailure;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class LoadPlayerSuccess implements Action {
  readonly type = PlayersActionTypes.LoadPlayerSuccess;

  constructor(public payload: any) {
  }
}


export type PlayersActions = LoadPlayers
  | LoadPlayersFailure
  | LoadPlayersSuccess
  | LoadStaffs
  | LoadStaffsFailure
  | LoadStaffsSuccess
  | LoadPlayer
  | LoadPlayerFailure
  | LoadPlayerSuccess;
