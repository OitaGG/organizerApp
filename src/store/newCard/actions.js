export const TOGGLE_NEW_CARD = "TOGGLE_NEW_CARD";
export const REWRITE_CURRENT_CARD = "REWRITE_CURRENT_CARD";
export const SET_TITLE = "SET_TITLE";
export const SET_DESCRIPTION = "SET_DESCRIPTION";

export type TOGGLE_NEW_CARD_TYPE = typeof TOGGLE_NEW_CARD;
export type REWRITE_CURRENT_CARD_TYPE = typeof REWRITE_CURRENT_CARD;
export type SET_TITLE_TYPE = typeof SET_TITLE;
export type SET_DESCRIPTION_TYPE = typeof SET_DESCRIPTION;

interface ToggleNewCard {
    type: TOGGLE_NEW_CARD_TYPE,
}

interface RewriteCurrentCard {
    type: REWRITE_CURRENT_CARD_TYPE,
    payload: string
}

interface SetTitle {
    type: SET_TITLE_TYPE,
    payload: string
}

interface SetDescription {
    type: SET_TITLE_TYPE,
    payload: string
}

export const toggleNewCardActionCreator = (): ToggleNewCard => ({
    type: TOGGLE_NEW_CARD
});

export const setTitleAction = (title) => ({
    type: SET_TITLE,
    payload: title
});

export const setDescriptionAction = (description) => ({
    type: SET_TITLE,
    payload: description
});

export const rewriteCurrentCard = (newCardData: any): RewriteCurrentCard => ({
   type: REWRITE_CURRENT_CARD,
   payload: newCardData
});