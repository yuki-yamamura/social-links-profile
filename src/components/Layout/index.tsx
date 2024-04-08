import styles from './index.module.scss';

type Props = React.PropsWithChildren;

const Layout = ({ children }: Props) => (
  <div className={styles.module}>{children}</div>
);

export default Layout;
