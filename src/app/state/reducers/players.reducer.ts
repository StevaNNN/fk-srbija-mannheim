import {PlayersState} from '../models/players.models';
import {PlayersActions, PlayersActionTypes} from '../actions/players.actions';

export const initialState: PlayersState = {
  isLoading: false,
  players: [],
  staff: []
};

export function playersReducer(
  state: PlayersState = initialState,
  action: PlayersActions): PlayersState {
  switch (action.type) {

    case PlayersActionTypes.LoadPlayers:
      return {...state, isLoading: true};

    case PlayersActionTypes.LoadPlayersFailure:
      return {...state, isLoading: false, players: null};

    case PlayersActionTypes.LoadPlayersSuccess:
      return {...state, isLoading: false, players: action.payload};

    case PlayersActionTypes.LoadStaffs:
      return {...state, isLoading: true};

    case PlayersActionTypes.LoadStaffsFailure:
      return {...state, isLoading: false, staff: null};

    case PlayersActionTypes.LoadStaffsSuccess:
      return {...state, isLoading: false, staff: action.payload};

    default:
      return state;
  }
}
