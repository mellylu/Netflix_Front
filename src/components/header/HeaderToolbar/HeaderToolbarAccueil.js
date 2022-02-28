import React from 'react';
import Link from 'next/link';
import styles from "./HeaderToolbar.module.scss";

const HeaderToolbarAccueil = () => {
    return (
        <div className={styles.header__toolbar}>
            <Link href="/">
                <a className="btn btn-red">Se connecter</a>
            </Link>
        </div>
    );
};

export default HeaderToolbarAccueil;