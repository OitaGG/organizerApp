// @flow
export const CHANGE_CURRENT_WEEK = "CHANGE_CURRENT_WEEK";
export type CHANGE_CURRENT_WEEK_TYPE = typeof CHANGE_CURRENT_WEEK;

export interface ChangeCurrentWeekAction {
    type: CHANGE_CURRENT_WEEK_TYPE,
    currentWeek: string
}

export const changeCurrentWeekAction = (payload: string): ChangeCurrentWeekAction => ({
    type: CHANGE_CURRENT_WEEK,
    payload
});

export type ChangeCurrentWeekActionType = typeof changeCurrentWeekAction;