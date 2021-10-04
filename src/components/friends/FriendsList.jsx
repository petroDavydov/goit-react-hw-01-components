import s from './Friends.module.css';
import PropTypes from 'prop-types';
import Friend from './Friend';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend avatar={avatar} name={name} isOnline={isOnline} id={id} />
      ))}
    </ul>
  );
}

FriendsList.propeTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
