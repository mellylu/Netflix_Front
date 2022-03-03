import jwt_decode from "jwt-decode";


//tous les fetchs qu'on fera vers notre api
export default{
    register(user){ //créer une fonction register avec user comme argument, user c'est le body de l'utilisateur   
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}api/v1/users/register`, {//va chercher dans le controller la méthode register
        method:"POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(user)//on stringifie le body pour l'envoyer à l'api
      })//revoie une promesse qu'on traite par catch try, 
      .then((res)=>res.json()) //on met en json dans la réponse
    },
    login(user){
        //let headers = new Headers();

  //headers.append('Content-Type', 'application/json');

  //headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');


        return fetch(`${process.env.NEXT_PUBLIC_API_URL}api/v1/users/login`, {
            method:"POST",
            headers: {
                "content-type":"application/json"
                //"Access-Control-Allow-Origin":"http://localhost:3000"

            },
        body:JSON.stringify(user)
        }).then((res) => res.json())
    },
    getMovies(token){
            return fetch(`${process.env.NEXT_PUBLIC_API_URL}api/v1/movies/`, {
                headers: {
                    "authorization":token,
                    "content-type":"application/json"
                }
            })
            .then(res => res.json())
    },
    getMovie(id, token) {;
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}api/v1/movies/` + id, {
            headers: {
                "authorization":token,
                "content-type":"application/json"
            },
        })
        .then(res => res.json())
},
    getUser(token) {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}api/v1/users/get-user`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    getUsers(token) {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}api/v1/users/`, {
            headers: {
                "authorization":token,
                "content-type":"application/json"
            }
        })
        .then(res => res.json())
    },



    updateUser(token, user) {
        var decoded = jwt_decode(token);
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}api/v1/users/`+ decoded.id, {
            method: "PUT",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
    verifyToken(token) {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}api/v1/users/verifytoken`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    }
    
}