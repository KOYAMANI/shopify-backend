import {
    ITEM_CREATE_FAIL,
    ITEM_CREATE_REQUEST,
    ITEM_CREATE_SUCCESS, ITEM_DELETE_FAIL, ITEM_DELETE_REQUEST, ITEM_DELETE_SUCCESS, ITEM_EDIT_FAIL,
    ITEM_EDIT_REQUEST, ITEM_EDIT_SUCCESS, ITEM_SORT_FAIL, ITEM_SORT_REQUEST, ITEM_SORT_SUCCESS
} from '../constants/itemConstants';

import axios from 'axios';


export const createItemAction = (name, tag, status) => async (dispatch) => {
    try {
        dispatch({ type: ITEM_CREATE_REQUEST });

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };

        const { data } = await axios.post(`api/items/create`, {name, tag, status}, config);

        dispatch({ type: ITEM_CREATE_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: ITEM_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const editItemAction = (name, tag, status, id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ITEM_EDIT_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = axios.put(`api/items/edit/${id}`,{name, tag, status}, config);

        dispatch({ type: ITEM_EDIT_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: ITEM_EDIT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteItemAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ITEM_DELETE_REQUEST });

        const { data } = await axios.put(`api/items/delete/${id}`);

        dispatch({ type: ITEM_DELETE_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: ITEM_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const sortItemAction = (status) => async (dispatch, getState) => {
    try {
        dispatch({ type: ITEM_SORT_REQUEST });

        const { data } = await axios.get(`api/items/sort/${status}`, status);
        console.log(`data: ${data}`)

        dispatch({ type: ITEM_SORT_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: ITEM_SORT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};