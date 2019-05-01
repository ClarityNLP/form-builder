import { REMOVE_SELECTION, ADD_SELECTION, SET_SELECTIONS } from "./types";

export const removeSelection = selection => {
    return {
        type: REMOVE_SELECTION,
        data: selection
    };
};

export const addSelection = selection => {
    return {
        type: ADD_SELECTION,
        data: selection
    };
};

export const setSelections = selections => {
    return {
        type: SET_SELECTIONS,
        data: selections
    };
};
