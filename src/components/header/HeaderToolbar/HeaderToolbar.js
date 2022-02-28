import React, { useState } from 'react';
import Link from "next/link";
import styles from "./HeaderToolbar.module.scss";
import loupeRecherche from "../../../../public/loupe.png";
import IconProfil from "../../../../public/icon-profil.jpg";
import deconnexion from "../../../../public/déconnexion.png";
import Input from "../../UI/Input/Input";

const Headertoolbar = () => {

    const[recherche, setRecherche] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    
    function logout() {
        localStorage.clear();
        window.location.href = '/';
    }

    function barreDeRecherche() {
        if (recherche==false) {
            setRecherche(true)
        }
        else{
            setRecherche(false)
        }
    }

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

    console.log(searchTerm)

    return (
        <div className={styles.header__toolbar}>
            <div className={styles.barreDeRecherche}>
                {recherche? (
                    <Input 
                        type="text"
                        label="recherche"
                        id="id"
                        name="recherche"
                        placeholder="genre, titre, ect"
                        onChange={handleSearchTerm}
                    ></Input>
                    ):""
                }
            </div>
            <img onClick={() => {barreDeRecherche()}} src={loupeRecherche.src} alt="Loupe Recherche"/>
            <Link href="/profil">
                <img src={IconProfil.src} alt="icon profil"/>
            </Link>
            <img onClick={() => {logout()}} src={deconnexion.src} alt="deconnexion"/>

            </div>

    );
}

export default Headertoolbar;
