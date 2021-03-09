import Profile from './profile'
import {connect} from 'react-redux'
import {fetchUserData} from '../../actions/user_actions';
import {createFavorite, deleteFavorite} from '../../actions/favorite_actions'
import {deleteReview} from '../../actions/review_actions'

const mSTP = (state, ownProps) => {
    debugger
    return {
        currentUser: Object.values(state.entities.users)[0],
        reservations: state.entities.reservations,
        restaurants: state.entities.restaurants,
        favorites: state.entities.favorites,
        reviews: state.entities.reviews
    }
}

const mDTP = dispatch => {
    return {
        fetchUserData: userId => dispatch(fetchUserData(userId)),
        createFavorite: favorite => dispatch(createFavorite(favorite)),
        deleteFavorite: favId => dispatch(deleteFavorite(favId)),
        deleteReview: revId => dispatch(deleteReview(revId))
    }
}


export default connect(mSTP, mDTP)(Profile);