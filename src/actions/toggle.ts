export enum ToggleActionType {
  TOGGLE = 'TOGGLE/CLASS',
}

export interface ToggleAction {
  type: ToggleActionType;
}

export const ToggleClass = (): ToggleAction => ({
  type: ToggleActionType.TOGGLE,
});
