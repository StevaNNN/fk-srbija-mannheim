import {Action} from '@ngrx/store';

export enum GetCalendarsActionTypes {
  LoadCalendars = '[GetCalendars] Load Calendarss',


}

export class LoadCalendars implements Action {
  readonly type = GetCalendarsActionTypes.LoadCalendars;
}


export type CalendarsActions = LoadCalendars;
