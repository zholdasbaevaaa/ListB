import { ADD_AD, DELETE_AD } from './actions';

const initialState = {
    ads: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AD:
            return {
                ...state,
                ads: [...state.ads, action.payload]
            };
        case DELETE_AD:
            return {
                ...state,
                ads: state.ads.filter(ad => ad.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default reducer;
