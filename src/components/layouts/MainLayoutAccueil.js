import React from 'react';
import HeaderLogo from '../header/HeaderLogo/HeaderLogo';
import HeaderToolbarAccueil from '../header/HeaderToolbar/HeaderToolbarAccueil';
import styles from "./MainLayout.module.scss";

const MainLayoutAccueil = ({children}) => {
    return (
    <>
        <header className={styles.header__main}>
                <HeaderLogo/>
                <HeaderToolbarAccueil/>
            </header>
            <main>
                {children}
            </main>
    </>
    );
};

export default MainLayoutAccueil;