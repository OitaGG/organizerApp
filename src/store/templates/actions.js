import todosTemplates from "../../utils/api/todosTemplates";

export const FETCH_SINGLE_CASES = "FETCH_SINGLE_CASES";
export const SET_SINGLE_CASES = "SET_SINGLE_CASES";
export const FETCH_WEEK_TEMPLATE ="FETCH_WEEK_TEMPLATE";
export const SET_WEEK_TEMPLATE = "SET_WEEK_TEMPLATE";
export const CHANGE_CURRENT_TEMPLATES_LIST = "CHANGE_CURRENT_TEMPLATES_LIST";
export const DELETE_SINGLE_CASE = "DELETE_SINGLE_CASE";
export const FETCH_DELETE_SINGLE_CASE = "FETCH_DELETE_SINGLE_CASE";
export const DELETE_WEEK_TEMPLATE = "DELETE_WEEK_TEMPLATE";
export const ADD_NEW_CASE_TEMPLATE = "ADD_NEW_CASE_TEMPLATE";


export const FETCH_SINGLE_CASES_TYPE = typeof FETCH_SINGLE_CASES;
export const SET_SINGLE_CASES_TYPE = typeof SET_SINGLE_CASES;
export const FETCH_WEEK_TEMPLATE_TYPE = typeof FETCH_WEEK_TEMPLATE;
export const SET_WEEK_TEMPLATE_TYPE = typeof SET_WEEK_TEMPLATE;
export const CHANGE_CURRENT_TEMPLATES_LIST_TYPE = typeof CHANGE_CURRENT_TEMPLATES_LIST;
export const DELETE_SINGLE_CASE_TYPE = typeof DELETE_SINGLE_CASE;
export const DELETE_WEEK_TEMPLATE_TYPE = typeof DELETE_WEEK_TEMPLATE;
export const ADD_NEW_CASE_TEMPLATE_TYPE = typeof ADD_NEW_CASE_TEMPLATE;

interface SetSingleCasesAction {
    type: SET_SINGLE_CASES_TYPE,
    payload: any
}

interface SetWeekTemplateAction {
    type: SET_WEEK_TEMPLATE_TYPE,
    payload: any
}

interface ChangeCurrentTemplatesListAction {
    type: CHANGE_CURRENT_TEMPLATES_LIST_TYPE,
    payload: string
}

interface DeleteSingleCaseAction {
    type: DELETE_SINGLE_CASE_TYPE,
    payload: id
}

interface DeleteWeekTemplateAction {
    type: DELETE_WEEK_TEMPLATE_TYPE,
    payload: id
}

interface AddNewCaseTemplateAction {
    type: ADD_NEW_CASE_TEMPLATE_TYPE,
    payload: id
}
export const setSingleCasesActionCreator = (cases: any): SetSingleCasesAction => ({
    type: SET_SINGLE_CASES,
    payload: cases
});

export const fetchSingleCasesActionCreator = () => (dispatch): void => {
    console.log('ok')
    todosTemplates.getAll()
                    .then(cases => dispatch(setSingleCasesActionCreator(cases)));
};

export const setWeekTemplateActionCreator = (weekCase: any): SetWeekTemplateAction => ({
   type: SET_WEEK_TEMPLATE,
   payload: weekCase
});

export const fetchWeeksTemplatesActionCreator = () => (dispatch): void => {
    todosTemplates.getWeeksTemplate()
                    .then(weeks => dispatch(setWeekTemplateActionCreator(weeks)))
};

export const changeCurrentTemplatesListActionCreator = (currentTemplate: string): ChangeCurrentTemplatesListAction => ({
   type: CHANGE_CURRENT_TEMPLATES_LIST,
   payload: currentTemplate
});

export const deleteSingleCaseActionCreator = (id) => ({
    type: DELETE_SINGLE_CASE,
    payload: id
});

export const fetchDeleteSingleCaseActionCreator = (id) => (dispatch) => {
    todosTemplates.deleteSingleTemplate(id)
                    .then(data => dispatch(deleteSingleCaseActionCreator(id)))
};

export const deleteWeekTemplateActionCreator = (id: number) => ({
    type: DELETE_WEEK_TEMPLATE,
    payload: id
});

export const fetchDeleteWeekTemplateActionCreator = (id) => (dispatch) => {
    todosTemplates.deleteWeekTemplate(id)
                    .then(data => dispatch(deleteWeekTemplateActionCreator(id)))
};

export const fetchNewCaseTemplateActionCreator = (data) => (dispatch) => {
    console.log(data)
    todosTemplates.addNewSingleTemplate(data).then(res => dispatch(fetchSingleCasesActionCreator()))
};