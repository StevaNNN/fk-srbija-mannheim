import { Action } from '@ngrx/store';

export enum GetTableActionTypes {
  LoadGetTables = '[GetTable] Load GetTables',
  
  
}

export class LoadGetTables implements Action {
  readonly type = GetTableActionTypes.LoadGetTables;
}


export type TableActions = LoadGetTables;
