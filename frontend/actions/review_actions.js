import * as APIUTIL from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const createReview = review => dispatch => {
    return APIUTIL.createReview(review)
        .then(review => {
            return dispatch(receiveReview(review))})
}