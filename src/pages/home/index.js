import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import TitlePage from '../../components/UI/Title/TitlePage';
import styles from './index.module.scss'
import authService from '../../services/auth.service';
import Modal from '../../components/modal/Modal';

const Index = () => {
    const [movies, setMovies] = useState([]);
    const [idElement, setIdElement] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const [genre, setGenre] = useState("");


    useEffect(() => {
        const token = localStorage.getItem("token");
        authService
            .getMovies(token)
            .then((data) => {
                setMovies(data.movie);
            })
            .catch((err) => console.log(err));
    }, []);

    const change = (e) => {
        let value = e.target.value;
        setGenre(value);
    }


    return (
        <div className={styles.page__home}>
            {
                isVisible ? (
                    <div className={styles.page_assombrir}>
                        <MainLayout />
                        <div className={styles.page_titre} >
                            <TitlePage title="Films" />
                            <select className={styles.barreGenre} onChange={change} value="Genre">
                                <option value="Action">Action</option>
                                <option value="Anime">Anime</option>
                                <option value="Comédie">Comédie</option>
                                <option value="Documentaire">Documentaire</option>
                                <option value="Drame">Drame</option>
                                <option value="Fantastique">Fantastique</option>
                                <option value="Horreur">Horreur</option>
                                <option value="Jeunesse et famille">Jeunesse et famille</option>
                                <option value="Policier">Policier</option>
                                <option value="Romance">Romance</option>
                                <option value="Science fiction">Science fiction</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                        </div>
                        <div className={styles.div}>
                            {
                                movies.map((element) => (
                                    <div key={element._id}>
                                        <img onClick={() => {
                                            setIdElement(element._id);
                                            setIsVisible(true);
                                        }} className={styles.movies__img} src={element.image}>
                                        </img>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : 
                    <div>
                        <MainLayout />
                        <div className={styles.page_titre} >
                            <TitlePage title="Films" />
                            <select className={styles.barreGenre} onChange={change} value="Genre">
                                <option value="Action">Action</option>
                                <option value="Anime">Anime</option>
                                <option value="Comédie">Comédie</option>
                                <option value="Documentaire">Documentaire</option>
                                <option value="Drame">Drame</option>
                                <option value="Fantastique">Fantastique</option>
                                <option value="Horreur">Horreur</option>
                                <option value="Jeunesse et famille">Jeunesse et famille</option>
                                <option value="Policier">Policier</option>
                                <option value="Romance">Romance</option>
                                <option value="Science fiction">Science fiction</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                        </div>
                        <div className={styles.div}>
                            {
                                movies.map((element) => (
                                    <div key={element._id}>
                                        <img onClick={() => {
                                            setIdElement(element._id);
                                            setIsVisible(true);
                                        }} className={styles.movies__img} src={element.image}>
                                        </img>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
            {
                isVisible ? (
                    <Modal
                        setIsVisible={setIsVisible} //on envoie le set pour pouvoir le modifier dans la modal
                        id_data={idElement} //envoie la valeur de l'id du film
                    >
                    </Modal>) : ""
            }


        </div>


    );
};

export default Index;


