export const createFavorite = favorite => {
    debugger
    return $.ajax({
        method: 'POST',
        url: 'api/favorites',
        data: {favorite}
    })
}

export const deleteFavorite = favId => {
    debugger
    return $.ajax({
        method: 'DELETE',
        url: `api/favorites/${favId}`
    })
}