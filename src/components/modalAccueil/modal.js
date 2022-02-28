import React from 'react';
import styles from "./modal.module.scss";
import netflixFond from "../../../public/netflix-fond.jpeg";

const Modal = (props) => {
    return (
        <>
        <div className={styles.overlay}></div>
        <img className={styles.modal_imageFond} src={netflixFond.src}></img>
        <div className={styles.modal}>
            <h2>{props.title}</h2>
            {props.children}
            <a href={props.href}>{props.a}</a>
            
        </div>


        </>
    );
}

export default Modal;
