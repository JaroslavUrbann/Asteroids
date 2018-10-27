import { SEARCH } from "../actions";

const Reducer = (state, action) => {
    switch (action.type) {
        case SEARCH + "_PENDING":
            {
                return state;
            }
        case SEARCH + "_FULFILLED":
            {
                var data = [];
                state.data = [];
                data = Object.values(action.payload.data.near_earth_objects);
                for (var i = 0; i < data.length; i++) {
                    state.data = state.data.concat(Object.values(data[i]));
                }
                return { ...state };
            }
        case SEARCH + "_REJECTED":
            {
                return state;
            }
        default:
            return state;
    }
};

export default Reducer;