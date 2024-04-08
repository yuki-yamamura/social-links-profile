import Avatar from './Avatar';
import SocialAccounts from './SocialLInk';

import type { User } from '@/types/User';

import styles from './index.module.scss';

type Props = {
  user: User;
};

const Profile = ({ user }: Props) => (
  <div className={styles.module}>
    <Avatar image={user.avatar} />
    <div>
      <h2 className={styles.name}>{user.name}</h2>
      <div className={styles.location}>{user.location}</div>
    </div>
    <div>{`"${user.bio}"`}</div>
    <SocialAccounts socialAccounts={user.socialAccounts} />
  </div>
);

export default Profile;
