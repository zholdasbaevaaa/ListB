export const ADD_AD = 'ADD_AD';
export const DELETE_AD = 'DELETE_AD';

export const addAd = (text) => ({
    type: ADD_AD,
    payload: {
        id: new Date().getTime(),
        text
    }
});

export const deleteAd = (id) => ({
    type: DELETE_AD,
    payload: {
        id
    }
});
