import * as APIUTIL from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';

const receiveFavorite = favorite => {
    return {
        type: RECEIVE_FAVORITE,
        favorite
    }
}

export const createFavorite = favorite => dispatch => {
    debugger
    return APIUTIL.createFavorite(favorite)
        .then(favorite => {
            debugger
            return dispatch(receiveFavorite(favorite))
        })
}

export const deleteFavorite = favId => dispatch => {
    return APIUTIL.deleteFavorite(favId)
        .then(favorite => {

        })
}