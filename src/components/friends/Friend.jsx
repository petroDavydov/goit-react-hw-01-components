import s from './Friends.module.css';
import PropTypes from 'prop-types';
import { friendStatus } from '../../helper/friendStatus';

export default function Friend({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={s.item}>
      <span className={s.status} style={{ color: friendStatus(isOnline) }}>
        •
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
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
