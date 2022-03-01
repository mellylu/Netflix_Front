import React from 'react';
import LogoImg from "../../../../public/Netflix-logo.png";
import styles from "./HeaderLogo.module.scss";
import Image from 'next/image'

const Headerlogo = () => {
    return (
        <div className={styles.header__logo}>
            <Image src={LogoImg.src} alt="Netflix Logo"/>
        </div>
    );
}

export default Headerlogo;
