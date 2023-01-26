import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendlistItem = ({avatar, name, isOnline}) => {
    return (
        <>
        <span className={isOnline?css.online:css.offline}></span>
        <img className='avatar' src={avatar} alt="User avatar" width='50'/>
        <p className='name'>{name}</p>
        </>
    );
};

FriendlistItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }

export default FriendlistItem;