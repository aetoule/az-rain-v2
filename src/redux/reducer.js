const initialState = {
    catsList: [],
    admin: {}
}

const SET_CATS_LIST = "SET_CATS_LIST";

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_CATS_LIST:
            return {...state, catsList: action.payload}
        default:
            return {...state}
    }
}

export function setCatsList(catsList) {
    return {
        type: SET_CATS_LIST,
        payload: catsList 
    }
}