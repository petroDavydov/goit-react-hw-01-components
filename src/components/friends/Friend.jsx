import s from './Friends.module.css';
import PropTypes from 'prop-types';
import { FriendStatus } from './FriendStatus';

export default function Friend({ avatar, name, isOnline, id }) {
  return (
    <ul key={id} className={s.wrapperFriend}>
      <li className={s.item}>
        <span className={s.status} style={{ color: FriendStatus(isOnline) }}>
          •
        </span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
      </li>
    </ul>
  );
}

Friend.defaultProps = {
  avatar: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
  name: 'User name',
  isOnline: false,
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
