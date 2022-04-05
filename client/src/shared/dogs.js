import * as ActionTypes from './ActionTypes';

export const Dogs = (state  = { isLoading: true,
                                        errMess: null,
                                        dogs:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DOGS:
        return {...state, isLoading: false, errMess: null, dogs: action.payload};

        case ActionTypes.DOGS_LOADING:
            return {...state, isLoading: true, errMess: null, dogs: []}

        case ActionTypes.DOGS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};
