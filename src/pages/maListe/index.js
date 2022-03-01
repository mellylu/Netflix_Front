import React, { useState, useEffect } from 'react';
import Titlepage from '../../components/UI/Title/TitlePage';
import Mainlayout from '../../components/layouts/MainLayout';
import authService from '../../services/auth.service';
import styles from './index.module.scss';
import Modal from '../../components/modal/modal';

const Index = () => {
    const [user, setUser] = useState([]);    
    const [idElement, setIdElement] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const [movies, setMovies] = useState([]);

    function deleteListe (id){
        
        console.log(id) 
        let newDataUser = user;
        let newFavoris = []
        user.favoris.forEach(favoris => {
            
            if (favoris.movie._id !== id){
                console.log(favoris)
                newFavoris.push(favoris);
                //return favoris
            }
        })
        user.favoris = newFavoris;
        const token = localStorage.getItem('token')
        authService.updateUser(token, user)
            .then(dataFavoris => {
                if (dataFavoris.update == true) {
                    setUser(dataFavoris.user)
                }
            })
            .catch((err) => console.log(err));
    }


    useEffect(() => {
        const token = localStorage.getItem("token");
        authService
            .getUser(token)
            .then((data) => {
                setUser(data);
            })
            .catch((err) => console.log(err));
    }, []);



    useEffect(() => {
        const token = localStorage.getItem("token");
        authService
            .getMovies(token)
            .then((data) => {
                setMovies(data.movie);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className={styles.maliste}>
                <div className={styles.maliste_assombrir}>
                    <Mainlayout />
                    <div>
                        <Titlepage title="Ma liste" />
                    </div>
                    <div className={styles.div}>
                        {
                            user.favoris ?(
                            user.favoris.map((element) => (
                                <div key={element._id}>
                                    <img onClick={() => {
                                        setIdElement(element.movie._id);
                                        setIsVisible(true);
                                    }} className={styles.movies__img} src={element.movie.image} alt="Film Liste">
                                    </img>
                                    <button onClick={() => deleteListe(element.movie._id)}>Enlever de la liste</button>
                                </div>
                            ))
                            ) : ""
                        }
                    </div>
                </div>
                {
                    isVisible ? (
                        <Modal
                            setIsVisible={setIsVisible} //on envoie le set pour pouvoir le modifier dans la modal
                            id_data={idElement} //envoie la valeur de l'id du film
                        >
                            
                        </Modal>) : ""
                }</div>
        </>
    );
};




export default Index;