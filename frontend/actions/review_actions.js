import * as APIUTIL from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

const removeReview = review => {
    return {
        type: REMOVE_REVIEW,
        review
    }
}

export const createReview = review => dispatch => {
    return APIUTIL.createReview(review)
        .then(review => {
            return dispatch(receiveReview(review))})
}

export const deleteReview = revId => dispatch => {
    return APIUTIL.deleteReview(revId)
        .then(review => {
            return dispatch(removeReview(review))
        })
}