import Head from 'next/head'
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import HeaderLogo from '../components/header/HeaderLogo/HeaderLogo';
import Modal from '../components/modalAccueil/ModalAccueil';
import Input from "../components/UI/Input/Input";
import styles from "./index.module.scss";
import authService from "../services/auth.service"
import Message from "../components/UI/message/Message";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); //enlève le submit refresh qui est par defaut
    authService.login(user)//on fetch : va chercher dans le controller de l'api, appelle la fonction dans sources
      .then(data => {
        console.log(data);
        if (data.message) {
          setError(true)
          setErrorMessage(data.message)
          return false;
        }
        localStorage.setItem("token", data.token) //si le token est bon on redirige la page vers profil et on enregistre le toker dans le localStorage
        router.push('/home')
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message)
      });
  };
  return (
    <div className="container">
      <Head>
        <title>Bienvenue dans Netflix</title>
        <meta name="description" content="Bienvenue dans Netflix" />
      </Head>
      <main className="main">
        <HeaderLogo />
        <Modal
          title="S'identifier"
          href="/register"
          a="Première visite sur Netflix ? Inscrivez vous">

          <form className={styles.form__login} onSubmit={(e) => handleSubmit(e)}>
            <Input
              type="email"
              label="Email"
              id="id"
              for="id"
              name="email"
              placeholder="Mon identifiant"
              required={true}
              onChange={(e) => { //evenement quand on ecrit dans un champ
                setUser({ ...user, email: e.target.value }) //spredoperateur, garder les valeurs saisies auparavant, les ajouter
                console.log(user)
              }}


            />
            <Input
              type="password"
              label="Mot de passe"
              id="password"
              for="password"
              name="password"
              placeholder="Mon mot de passe"
              required={true}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value }) //spredoperateur, garder les valeurs saisies auparavant, les ajouter
                console.log(user)
              }}
            />
            <input className="btn btn-red" width="100" type="submit" value="S'identifier" />*
            {
              error ? (
                <Message mess={errorMessage} type="error" />
              )
                :
                ""
            }

          </form>
        </Modal >

      </main>
    </div>
  )
}
