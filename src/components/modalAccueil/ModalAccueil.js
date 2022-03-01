import React from 'react';
import styles from "./Modal.module.scss";
import netflixFond from "../../../public/netflix-fond.jpeg";
import Image from 'next/image'

const ModalAccueil = (props) => {
    return (
        <>
        <div className={styles.overlay}></div>
        <Image className={styles.modal_imageFond} src={netflixFond.src} alt="Netflix Fond"></Image>
        <div className={styles.modal}>
            <h2>{props.title}</h2>
            {props.children}
            <a href={props.href}>{props.a}</a>
            
        </div>


        </>
    );
}

export default ModalAccueil;
