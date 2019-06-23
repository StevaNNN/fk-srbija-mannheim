import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromCalendars from './reducers/calendars.reducer';
import * as fromEvents from './reducers/events.reducer';
import * as fromPlayers from './reducers/players.reducer';
import * as fromStaff from './reducers/staff.reducer';
import * as fromTable from './reducers/table.reducer';
import * as fromTeams from './reducers/teams.reducer';
import {EventsState} from './models/events.models';
import {EventsEffects} from './effects/events.effects';
import {PlayersState} from './models/players.models';
import {PlayersEffects} from './effects/players.effects';

export interface AppState {
  // calendars: fromCalendars.State;
  events: EventsState;
  players: PlayersState;
  // staff: fromStaff.State;
  // table: fromTable.State;
  // teams: fromTeams.State;
}

export const reducers: ActionReducerMap<AppState> = {
  // calendars: fromCalendars.reducer,
  events: fromEvents.eventsReducer,
  players: fromPlayers.playersReducer,
  // staff: fromStaff.reducer,
  // table: fromTable.reducer,
  // teams: fromTeams.reducer,
};

export const effects = [EventsEffects, PlayersEffects];


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
