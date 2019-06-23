import { Action } from '@ngrx/store';

export enum GetTeamsActionTypes {
  LoadGetTeamss = '[GetTeams] Load GetTeamss',
  
  
}

export class LoadGetTeamss implements Action {
  readonly type = GetTeamsActionTypes.LoadGetTeamss;
}


export type TeamsActions = LoadGetTeamss;
