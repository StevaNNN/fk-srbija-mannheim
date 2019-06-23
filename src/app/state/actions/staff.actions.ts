import { Action } from '@ngrx/store';

export enum GetStaffActionTypes {
  LoadGetStaffs = '[GetStaff] Load GetStaffs',
  
  
}

export class LoadGetStaffs implements Action {
  readonly type = GetStaffActionTypes.LoadGetStaffs;
}


export type StaffActions = LoadGetStaffs;
