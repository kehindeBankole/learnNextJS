import styles from '../styles/Nav.module.css'
function Nav({children}) {
    return (
        <div className={styles.nav}>
            {/* {children} */}
            <p>nav</p>
        </div>
    )
}

export default Nav
