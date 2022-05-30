import {
    ITEM_CREATE_FAIL,
    ITEM_CREATE_REQUEST,
    ITEM_CREATE_SUCCESS, ITEM_DELETE_FAIL, ITEM_DELETE_REQUEST, ITEM_DELETE_SUCCESS, ITEM_EDIT_FAIL,
    ITEM_EDIT_REQUEST, ITEM_EDIT_SUCCESS, ITEM_SORT_FAIL, ITEM_SORT_REQUEST, ITEM_SORT_SUCCESS
} from '../constants/itemConstants';

export const itemCreateReducer = (state={}, action) => {
    switch ( action.type ){
        case ITEM_CREATE_REQUEST:
            return { loading: true }
        case ITEM_CREATE_SUCCESS:
            return { loading: false}
        case ITEM_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const itemEditReducer = (state={}, action) => {
    switch ( action.type ){
        case ITEM_EDIT_REQUEST:
            return { loading: true }
        case ITEM_EDIT_SUCCESS:
            return { loading: false}
        case ITEM_EDIT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const itemSortReducer = (state={items: []}, action) => {
    switch ( action.type ){
        case ITEM_SORT_REQUEST:
            return { loading: true }
        case ITEM_SORT_SUCCESS:
            return { loading: false, items: action.payload }
        case ITEM_SORT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const itemDeleteReducer = (state={}, action) => {
    switch ( action.type ){
        case ITEM_DELETE_REQUEST:
            return { loading: true }
        case ITEM_DELETE_SUCCESS:
            return { loading: false}
        case ITEM_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}