import PropTypes from 'prop-types'
import css from './Profile.module.css'

const Profile = ({username, tag, location, avatar, stats: {followers,views,likes}}) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img 
                    src={avatar} 
                    alt="User avatar" 
                    className={css.profileAvatar}
                />
                <p className={css.profileName}>{username}</p>
                <p className={css.profileTag}>@{tag}</p>
                <p className={css.profileLocation}>{location}</p>  
            </div>
            <ul className={css.stats}>
                <li>
                    <span className={css.statName}>Followers</span>
                    <span className={css.statQuantity}>{followers}</span>
                </li>
                <li>
                    <span className={css.statName}>Views</span>
                    <span className={css.statQuantity}>{views}</span>
                </li>
                <li>
                    <span className={css.statName}>Likes</span>
                    <span className={css.statQuantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
  }).isRequired,
}

export default Profile;