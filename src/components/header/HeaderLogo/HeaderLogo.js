import React from 'react';
import styles from "./HeaderLogo.module.scss";
import Image from 'next/image'
import Logo from "../../../../public/Netflix-logo.png";

const Headerlogo = () => {
    return (
        <div className={styles.header__logo}>
            <Image
                src={Logo}
                alt=""
                layout="responsive"
                className={styles.logo}
            />
           
        </div>
    );
}

export default Headerlogo;
