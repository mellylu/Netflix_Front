import React, { useState } from "react";
import { useRouter } from "next/router";
import authService from "../../services/auth.service"
import Message from "../../components/UI/message/Message"
import Modal from "../../components/modalAccueil/ModalAccueil";
import Input from "../../components/UI/Input/Input";
import styles from "./index.module.scss";
import MainLayoutAccueil from "../../components/layouts/MainLayoutAccueil";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});//objet qui prend les propriétés des inputs, affecter chaque valeur des inputs sur le onChange
  const [error, setError] = useState(false);//rendre réactif la data le state permet de l'utiliser dans la div
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.register(user)
      .then(data => {
        console.log(data);
        if (data.success == false) {
          console.log(data);
          setError(true);
          setErrorMessage(data.message)
          return false;
        }
        localStorage.setItem("token", data.token);
        router.push("/");
      })
      .catch(err => {
        console.log(err)
        setError(true);
        setErrorMessage(err.message)
      });
  };

  return (
    <div>
      <MainLayoutAccueil />
      <Modal
        title="S'inscrire">


        <form className={styles.form__register} onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            label="Nom"
            id="firstName"
            name="firstName"
            placeholder="Mon nom"
            required={true}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value }) //spredoperateur, garder les valeurs saisies auparavant, les ajouter
              console.log(user)
            }}
          />
          <Input
            type="text"
            label="Prénom"
            id="lastName"
            name="lastName"
            placeholder="Mon prénom"
            required={true}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value }) //spredoperateur, garder les valeurs saisies auparavant, les ajouter
              console.log(user)
            }}
          />
          <Input
            type="email"
            label="Email"
            id="email"
            name="email"
            placeholder="Mon email"
            required={true}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value }) //spredoperateur, garder les valeurs saisies auparavant, les ajouter
              console.log(user)
            }}
          />
          <Input
            type="password"
            label="Mot de passe"
            id="password"
            name="password"
            placeholder="Mon mot de passe"
            required={true}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value }) //spredoperateur, garder les valeurs saisies auparavant, les ajouter
              console.log(user)
            }}
          />
          <input className="btn btn-red" type="submit" value="M'inscrire" />
          {
            error ? (
              <Message mess={errorMessage} type="error" />
            )
              : //else
              ""
          }
        </form>
      </Modal >
    </div>

  );
};

export default Index;
