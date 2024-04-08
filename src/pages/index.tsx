import Profile from '@/components/Profile';

import type { User } from '@/types/User';

import styles from './index.module.scss';

const Page = () => {
  const user: User = {
    name: 'Jessica Randall',
    avatar: '/assets/images/avatar-jessica.jpeg',
    location: 'London, United Kingdom',
    bio: 'Front-end developer and avid reader.',
    socialAccounts: [
      {
        serviceName: 'GitHub',
        url: '#',
      },
      {
        serviceName: 'Frontend Mentor',
        url: '#',
      },
      {
        serviceName: 'LinkedIn',
        url: '#',
      },
      {
        serviceName: 'Twitter',
        url: '#',
      },
      {
        serviceName: 'Instagram',
        url: '#',
      },
    ],
  };

  return (
    <main className={styles.module}>
      <Profile user={user} />
    </main>
  );
};

export default Page;
