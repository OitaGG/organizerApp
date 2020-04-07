// @flow
export const HEADER_SETUP = "HEADER_SETUP";
export type HEADER_SETUP_TYPE = typeof HEADER_SETUP;

export interface HeaderSetupAction {
    type: HEADER_SETUP_TYPE,
    name: string
}

export const headerSetupAction = (name: string): HeaderSetupAction => ({
    type: HEADER_SETUP,
    name
});

export type HeaderAction = HeaderSetupAction;