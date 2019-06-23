import {EventsState} from '../models/events.models';
import {EventsActions, EventsActionTypes} from '../actions/events.actions';

export const initialState: EventsState = {
  isLoading: false,
  events: []
};

export function eventsReducer(
  state: EventsState = initialState,
  action: EventsActions): EventsState {
  switch (action.type) {
    case EventsActionTypes.LoadEvents:
      return {...state, isLoading: true};

    case EventsActionTypes.LoadEventsFailure:
      return {...state, isLoading: false, events: null};

    case EventsActionTypes.LoadEventsSuccess:
      return {...state, isLoading: false, events: action.payload};

    default:
      return state;
  }
}
