import React from 'react';
import LogoImg from "../../../../public/Netflix-logo.png";
import styles from "./HeaderLogo.module.scss";

const Headerlogo = () => {
    return (
        <div className={styles.header__logo}>
            <img src={LogoImg.src} alt="Netflix"/>
        </div>
    );
}

export default Headerlogo;
