import styles from "./modal.module.scss";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import authService from "../../services/auth.service";
import croix from "../../../public/croix.png";
import coeur from "../../../public/coeur.png";
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'

const Modal = (props) => {

    const [data, setData] = useState([]) //le user


    async function addFavoris(id) {

        const token = localStorage.getItem('token')
        const user = await authService.getUser(token)
        var index = 0;
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
            
            user.favoris.filter((element) => {
                console.log(user)
                return element._id !== user.favoris[favorisExist]._id
            });
                

            
            
            console.log(user.favoris)
            // delete user.favoris[favorisExist]
            // console.log(user.favoris)

        }
        console.log(user.favoris)
        authService.updateUser(token, user)
            .then(dataFavoris => {
                if (dataFavoris.update == true) {
                    setData(dataFavoris.user)
                }
            })
            .catch((err) => console.log(err));
    


        // while (user.favoris[index]) {
        //     if ({ movie: id }.movie != user.favoris[index].movie) {
        //         console.log('DANS LE IF')
        //         user.favoris.push({ movie: id })
        //         authService.updateUser(token, user)
        //             .then(dataFavoris => {
        //                 if (dataFavoris.update == true) {
        //                     dataFavoris.user.favoris.push({ movie: id })
        //                     setData(dataFavoris.user)
        //                 }
        //             })
        //             .catch((err) => console.log(err));
        //         }
                
        //     index++;
        // }
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
                            <Image onClick={() => props.setIsVisible(false)} className={styles.img_croix} src={croix.src} alt="croix" />
                            <Image onClick={() => addFavoris(data._id)} className={styles.img_coeur} src={coeur.src} alt="coeur" />

                            <Image className={styles.img_film} src={data.image} alt="image film"/>

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