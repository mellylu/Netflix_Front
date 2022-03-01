import styles from "./modal.module.scss";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import authService from "../../services/auth.service";
import croix from "../../../public/croix.png";
import coeur from "../../../public/coeur.png";
import { v4 as uuidv4 } from 'uuid';

const Modal = (props) => {

    const [data, setData] = useState([]) //le user


    async function addFavoris(id) {

        const token = localStorage.getItem('token')
        const user = await authService.getUser(token)
        var index = 0;
        console.log(user)
        let favorisExist = user.favoris.findIndex(
            (el) => {
                if (el.movie._id === id){
                    return el._id
                }
            }
        );
        console.log(favorisExist);
        if (favorisExist === -1){
            user.favoris.push({ movie: id })
            

        }
        else {
            let newFavoris = []
            user.favoris.forEach(favoris => {
                console.log(user)
                
                if (favoris.movie._id !== id){
                    newFavoris.push(favoris);
                }
            })
            user.favoris = newFavoris;

        }
        console.log(user)
        authService.updateUser(token, user)
            .then(dataFavoris => {
                if (dataFavoris.update == true) {
                    setData(dataFavoris.user)
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        authService
            .getMovie(props.id_data, token)
            .then(data_api => {
                setData(data_api.movie)
            })
            .catch((err) => console.log(err));
    }, [props.id_data])
    return (


        <>
            <div className={styles.modal}>
                {
                    data ? (
                        <>
                            <img onClick={() => props.setIsVisible(false)} className={styles.img_croix} src={croix.src} alt="croix" />
                            <img className={styles.img_film} src={data.image} alt="image film" />

                            <p></p>
                            <div>
                                <p>{data.age} {data.duration}</p>
                                <p>{data.description}</p>
                            </div>
                            <div>
                                <p className="text text-left">Genre : </p>
                                {data.type ? (data.type.map(elGenre => { //on met data.type ? pour que les données est le temps de charger et affiche bien
                                    return (
                                        <p key={uuidv4()}>{elGenre}</p>
                                    )
                                })) : ""
                                }
                                <img onClick={() => addFavoris(data._id)} className={styles.img_coeur} src={coeur.src} alt="coeur" />
                            </div>





                        </>

                    ) : (
                        <>
                            <h2>Chargement en cours ...</h2>
                            <button onClick={() => props.setIsVisible(false)}>Me fermer</button>
                        </>
                    )
                }
            </div>

        </>

    );
}

export default Modal;