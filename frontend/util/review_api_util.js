export const createReview = review => {
    return $.ajax({
        method: "POST",
        url: 'api/reviews',
        data: {review}
    })
}

export const deleteReview = revId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/reviews/${revId}`
    })
}