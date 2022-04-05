import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchBears = () => (dispatch) => {

    dispatch(bearsLoading());

    return fetch(baseUrl + 'bears')
    .then(response => response.json())
    .then(bears => dispatch(addBears(bears)));
}

export const bearsLoading = () => ({
    type: ActionTypes.BEARS_LOADING
});

export const bearsFailed = (errmess) => ({
    type: ActionTypes.BEARS_FAILED,
    payload: errmess
});

export const addBears = (bears) => ({
    type: ActionTypes.ADD_BEARS,
    payload: bears
});


export const fetchDogs = () => (dispatch) => {

    dispatch(dogsLoading());

    return fetch(baseUrl + 'dogs')
    .then(response => response.json())
    .then(dogs => dispatch(addDogs(dogs)));
}

export const dogsLoading = () => ({
    type: ActionTypes.DOGS_LOADING
});

export const dogsFailed = (errmess) => ({
    type: ActionTypes.DOGS_FAILED,
    payload: errmess
});

export const addDogs = (dogs) => ({
    type: ActionTypes.ADD_DOGS,
    payload: dogs
});

export const fetchFoxes = () => (dispatch) => {

    dispatch(foxesLoading());

    return fetch(baseUrl + 'foxes')
    .then(response => response.json())
    .then(foxes => dispatch(addFoxes(foxes)));
}

export const foxesLoading = () => ({
    type: ActionTypes.FOXES_LOADING
});

export const foxesFailed = (errmess) => ({
    type: ActionTypes.FOXES_FAILED,
    payload: errmess
});

export const addFoxes = (foxes) => ({
    type: ActionTypes.ADD_FOXES,
    payload: foxes
});

export const fetchOtters = () => (dispatch) => {

    dispatch(ottersLoading());

    return fetch(baseUrl + 'otters')
    .then(response => response.json())
    .then(otters => dispatch(addOtters(otters)));
}

export const ottersLoading = () => ({
    type: ActionTypes.OTTERS_LOADING
});

export const ottersFailed = (errmess) => ({
    type: ActionTypes.OTTERS_FAILED,
    payload: errmess
});

export const addOtters = (otters) => ({
    type: ActionTypes.ADD_OTTERS,
    payload: otters
});
