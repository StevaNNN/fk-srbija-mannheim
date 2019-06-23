import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EventsService} from '../services/events.service';
import * as EventsActions from '../actions/events.actions';
import {catchError, distinct, switchMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class EventsEffects {

  constructor(private actions$: Actions,
              private service: EventsService) {
  }

  @Effect()
  getEvents = this.actions$.pipe(
    ofType<EventsActions.LoadEvents>(EventsActions.EventsActionTypes.LoadEvents),
    distinct(() => EventsActions.EventsActionTypes.LoadEvents, this.actions$.pipe(ofType(
      EventsActions.EventsActionTypes.LoadEventsFailure,
      EventsActions.EventsActionTypes.LoadEventsSuccess,
    ))),
    switchMap(action =>
      this.service.getEvents()
        .pipe(
          map((data: any) => new EventsActions.LoadEventsSuccess(data)),
          catchError((error) => of(new EventsActions.LoadEventsFailure(error)))
        ))
  );
}
