import styles from './Navbar.module.css'
import Link from 'next/link'

export const Navbar = () => {
	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles.navLinks}>
					<Link href="/" className={styles.navLink}>
            Link1
          </Link>
          <Link href="/" className={styles.navLink}>
            Link2
          </Link>
				</div>
			</nav>
		</>
	);
};
