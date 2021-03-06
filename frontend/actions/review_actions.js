import * as APIUTIL from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveReview = review => {
    debugger
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const createReview = review => dispatch => {
    debugger
    return APIUTIL.createReview(review)
        .then(review => {
            debugger
            return dispatch(receiveReview(review))})
}