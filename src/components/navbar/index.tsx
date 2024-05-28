import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@sevn/styles/NavBar.module.css';
import { ArrowLeft } from '@phosphor-icons/react';

const NavBar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      {router.pathname !== '/' && (
        <Link href="/">
          <div className={styles.backForward}>
            <ArrowLeft weight='bold' color='#fff' size={24} />
          </div>
        </Link>
      )}
      <p className={styles.title}>
        SEVEN NEWS
      </p>
    </div>
  );
};

export default NavBar;
