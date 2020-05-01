// @flow
export const CHANGE_INPUT = "CHANGE_INPUT";
export type CHANGE_INPUT_TYPE = typeof CHANGE_INPUT;

export interface ChangeInputAction {
    type: CHANGE_INPUT_TYPE,
    payload: string
}


export const changeInputAction = (value: string): ChangeInputAction => ({
    type: CHANGE_INPUT,
    payload: value
});

export type changeInputActionType = changeInputAction;
