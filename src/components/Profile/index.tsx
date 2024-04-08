import Avatar from './Avatar';
import SocialAccounts from './SocialLInk';

import type { User } from '@/types/User';

type Props = {
  user: User;
};

const Profile = ({ user }: Props) => (
  <div>
    <Avatar image={user.avatar} />
    <div>
      <h2>{user.name}</h2>
      <div>{user.location}</div>
    </div>
    <div>{user.bio}</div>
    <SocialAccounts socialAccounts={user.socialAccounts} />
  </div>
);

export default Profile;
