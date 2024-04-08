import type { SocialAccount } from '@/types/SocialAccount';

export type User = {
  name: string;
  avatar: string;
  location: string;
  bio: string;
  socialAccounts: SocialAccount[];
};
