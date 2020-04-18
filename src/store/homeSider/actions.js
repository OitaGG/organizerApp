// @flow
export const CHANGE_TEMPLATES_LIST = "CHANGE_TEMPLATES_LIST";
export const CHANGE_INPUT = "CHANGE_INPUT";
export type CHANGE_TEMPLATES_LIST_TYPE = typeof CHANGE_TEMPLATES_LIST;
export type CHANGE_INPUT_TYPE = typeof CHANGE_INPUT;

export interface ChangeTemplatesListAction {
    type: CHANGE_TEMPLATES_LIST_TYPE,
    payload: string
}

export interface ChangeInputAction {
    type: CHANGE_INPUT_TYPE,
    payload: string
}

export const changeTemplatesListAction = (value: string): ChangeTemplatesListAction => ({
    type: CHANGE_TEMPLATES_LIST,
    payload: value
});

export const changeInputAction = (value: string): ChangeInputAction => ({
    type: CHANGE_INPUT,
    payload: value
});

export type changeTemplateListActionType = changeTemplatesListAction;
export type changeInputActionType = changeInputAction;