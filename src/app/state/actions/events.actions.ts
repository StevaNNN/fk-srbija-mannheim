import {Action} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';

export enum EventsActionTypes {
  LoadEvents = '[Events] Load Events',
  LoadEventsFailure = '[Events] Load Events Failure',
  LoadEventsSuccess = '[Events] Load Events Success'
}

export class LoadEvents implements Action {
  readonly type = EventsActionTypes.LoadEvents;
}

export class LoadEventsFailure implements Action {
  readonly type = EventsActionTypes.LoadEventsFailure;

  constructor(public payload: HttpErrorResponse) {
  }
}

export class LoadEventsSuccess implements Action {
  readonly type = EventsActionTypes.LoadEventsSuccess;

  constructor(public payload: any) {
  }
}


export type EventsActions = LoadEvents
  | LoadEventsFailure
  | LoadEventsSuccess;
