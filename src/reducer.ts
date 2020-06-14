import { Reducer } from 'redux';
import { ToggleAction, ToggleActionType } from './actions/toggle';

export interface ToggleState {
  BarClass: string;
  NavClass: string;
}

export const initialState: ToggleState = { BarClass: '', NavClass: '' };

const ToggleReducer: Reducer<ToggleState, ToggleAction> = (
  state: ToggleState = initialState,
  action: ToggleAction,
): ToggleState => {
  switch (action.type) {
    case ToggleActionType.TOGGLE:
      // eslint-disable-next-line no-return-assign
      return {
        ...state,
        BarClass: state.BarClass === '' ? 'is-active--bar' : '',
        NavClass: state.NavClass === '' ? 'is-active--nav' : '',
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
};

export default ToggleReducer;
