export const fetchUserData = userId => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}`,
    })
)