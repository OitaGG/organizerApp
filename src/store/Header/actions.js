// @flow
export const SHOW_SIDER = "SHOW_SIDER";
export type SHOW_SIDER_TYPE = typeof SHOW_SIDER;

export interface SiderShowAction {
    type: SHOW_SIDER_TYPE,
}

export const siderShowAction = (): SiderShowAction => ({
    type: SHOW_SIDER,
});

export type siderAction = siderShowAction;