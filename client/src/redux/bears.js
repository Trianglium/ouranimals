import { PROMOTIONS } from '../shared/bears';
import * as ActionTypes from './ActionTypes';

export const Bears = (state  = { isLoading: true,
                                        errMess: null,
                                        bears:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BEARS:
        return {...state, isLoading: false, errMess: null, bears: action.payload};

        case ActionTypes.BEARS_LOADING:
            return {...state, isLoading: true, errMess: null, bears: []}

        case ActionTypes.BEARS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};
