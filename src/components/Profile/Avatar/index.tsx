import styles from './index.module.scss';

type Props = {
  image: string;
};

const Avatar = ({ image }: Props) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={image} alt="avatar" className={styles.module} />
);

export default Avatar;
