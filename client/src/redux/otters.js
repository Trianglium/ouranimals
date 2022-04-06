import { PROMOTIONS } from '../shared/otters';

import * as ActionTypes from './ActionTypes';

export const Otters = (state  = { isLoading: true,
                                        errMess: null,
                                        otters:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_OTTERS:
        return {...state, isLoading: false, errMess: null, otters: action.payload};

        case ActionTypes.OTTERS_LOADING:
            return {...state, isLoading: true, errMess: null, otters: []}

        case ActionTypes.OTTERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};
