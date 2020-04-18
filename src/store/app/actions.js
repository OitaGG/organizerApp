// @flow
export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const CHANGE_CURRENT_WEEK = "CHANGE_CURRENT_WEEK";
export type SHOW_LOADER_TYPE = typeof SHOW_LOADER;
export type HIDE_LOADER_TYPE = typeof HIDE_LOADER;
export type LOG_IN_TYPE = typeof LOG_IN;
export type LOG_OUT_TYPE = typeof LOG_OUT;
export type CHANGE_CURRENT_WEEK_TYPE = typeof CHANGE_CURRENT_WEEK;

export interface LoaderSwitchAction {
    type: SHOW_LOADER_TYPE | HIDE_LOADER_TYPE,
}

export interface LogInAction {
    type: LOG_IN_TYPE,
    logged: boolean
}

export interface ChangeCurrentWeekAction {
    type: CHANGE_CURRENT_WEEK_TYPE,
    currentWeek: string
}

export const loaderSwitchAction = (loading: SHOW_LOADER_TYPE | HIDE_LOADER_TYPE): LoaderSwitchAction => ({
    type: loading,
});

export const logInAction = (): LogInAction => ({
    type: LOG_IN,
});

export const logOutAction = () => ({
    type: LOG_OUT
});


export const changeCurrentWeekAction = (payload: string): ChangeCurrentWeekAction => ({
    type: CHANGE_CURRENT_WEEK,
    payload
});

export type LoaderAction = loaderSwitchAction;
export type AuthAction = logInAction;
export type changeCurrentWeekActionType = changeCurrentWeekAction;