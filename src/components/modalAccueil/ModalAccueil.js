import React from 'react';
import Styles from "../modalAccueil/modal.module.scss";
import NetflixFond from "../../../public/netflix-fond.jpeg";
import Image from 'next/image'

const ModalAccueil = (props) => {
    return (
        <>
        <div className={Styles.overlay}></div>
        <Image className={Styles.modal_imageFond} src={NetflixFond.src} alt="Netflix Fond"></Image>
        <div className={Styles.modal}>
            <h2>{props.title}</h2>
            {props.children}
            <a href={props.href}>{props.a}</a>
            
        </div>


        </>
    );
}

export default ModalAccueil;
