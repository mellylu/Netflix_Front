import React from 'react';
import HeaderLogo from '../header/HeaderLogo/HeaderLogo';
import HeaderMenu from '../header/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../header/HeaderToolbar/HeaderToolbar';
import styles from "./MainLayout.module.scss";

const Mainlayout = ({children}) => {
    return (
        <>
            <header className={styles.header__main}>
                <HeaderLogo/>
                <HeaderMenu/>
                <HeaderToolbar/>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}

export default Mainlayout;
