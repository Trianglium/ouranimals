import { OTTERS } from '../shared/otters';
import { BEARS } from '../shared/bears';
import { DOGS } from '../shared/dogs';
import { FOXES } from '../shared/foxes';


export const initialState = {
    foxes: FOXES,
    bears: BEARS,
    dogs: DOGS,
    otters: OTTERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};
