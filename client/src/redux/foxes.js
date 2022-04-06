import { PROMOTIONS } from '../shared/foxes';

import * as ActionTypes from './ActionTypes';

export const Foxes = (state  = { isLoading: true,
                                        errMess: null,
                                        foxes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FOXES:
        return {...state, isLoading: false, errMess: null, foxes: action.payload};

        case ActionTypes.FOXES_LOADING:
            return {...state, isLoading: true, errMess: null, foxes: []}

        case ActionTypes.FOXES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};
