import * as APIUTIL from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const receiveFavorite = favorite => {
    return {
        type: RECEIVE_FAVORITE,
        favorite
    }
}

const removeFavorite = favorite => {
    return {
        type: REMOVE_FAVORITE,
        favorite
    }
}

export const createFavorite = favorite => dispatch => {
    return APIUTIL.createFavorite(favorite)
        .then(favorite => {
            return dispatch(receiveFavorite(favorite))
        })
}

export const deleteFavorite = favId => dispatch => {
    return APIUTIL.deleteFavorite(favId)
        .then(favorite => {
            return dispatch(removeFavorite(favorite))
        })
}