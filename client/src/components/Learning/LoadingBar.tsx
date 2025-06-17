import styles from '../../styles/learning.module.scss';

export default function LoadingBar() {
  return (
    <div className={styles.loadingBarWrapper}>
      <div className={styles.loadingBar} />
    </div>
  );
}