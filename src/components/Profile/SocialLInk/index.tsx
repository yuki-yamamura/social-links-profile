import type { SocialAccount } from '@/types/SocialAccount';

import styles from './index.module.scss';

type Props = {
  socialAccounts: SocialAccount[];
};

const SocialAccounts = ({ socialAccounts }: Props) => (
  <ul className={styles.list}>
    {socialAccounts.map(({ serviceName, url }) => (
      <li key={serviceName} className={styles.listitem}>
        <a href={url} className={styles.link}>
          {serviceName}
        </a>
      </li>
    ))}
  </ul>
);

export default SocialAccounts;
