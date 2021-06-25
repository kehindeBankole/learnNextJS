import styles from '../styles/Nav.module.css'
import Link from 'next/link'
function Nav({children}) {
    return (
        <div className={styles.nav}>
            {/* {children} */}
            <Link href="/about">Nav</Link>
        </div>
    )
}

export default Nav
