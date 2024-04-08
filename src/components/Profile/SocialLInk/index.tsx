import type { SocialAccount } from '@/types/SocialAccount';

type Props = {
  socialAccounts: SocialAccount[];
};

const SocialAccounts = ({ socialAccounts }: Props) => (
  <ul>
    {socialAccounts.map(({ serviceName, url }) => (
      <li key={serviceName}>
        <a href={url}>{serviceName}</a>
      </li>
    ))}
  </ul>
);

export default SocialAccounts;
