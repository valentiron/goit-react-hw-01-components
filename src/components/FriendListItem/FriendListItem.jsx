import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendlistItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.friendsListItem}>
            <span className={isOnline?css.online:css.offline}></span>
            <img className='avatar' src={avatar} alt="User avatar" width='50'/>
            <p className='name'>{name}</p>
        </li>
    );
};

FriendlistItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }

export default FriendlistItem;