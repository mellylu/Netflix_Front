import React from 'react';
import LogoImg from "../../../../public/Netflix-logo.png";
import Link from 'next/link';
import styles from "./HeaderMenu.module.scss";

const Headermenu = () => {
    return (
        <div className={styles.header__menu}>
            <nav>
                <ul>
                    <li>
                        <Link href="/films">
                            <a>
                            Films
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/maListe">
                            <a>
                            Ma liste
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Headermenu;
