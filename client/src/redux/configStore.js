import { Reducer, initialState } from './reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';

import { Bears } from './bears';
import { Dogs } from './dogs';
import { Foxes } from './foxes';
import { Otters } from './otters';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            bears: Bears,
            dogs: Dogs,
            foxes: Foxes,
            otters: Otters
        }),
        applyMiddleware(thunk, logger)

    );

    return store;
}
