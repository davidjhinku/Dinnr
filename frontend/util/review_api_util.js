export const createReview = review => {
    debugger
    return $.ajax({
        method: "POST",
        url: 'api/reviews',
        data: {review}
    })
}