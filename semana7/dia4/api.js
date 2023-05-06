// const obtenerDatosGithub = async()=>{
//     const response = await fetch("https://api.github.com/users/isainccorahua")
//     const data = await response.json();

//     console.log(data);
// }   


//primero atrapamos todos los elementos que usaremos con el id

const imageProfile = document.querySelector("#img-profile")
const githubName = document.querySelector("#github-name")
const githubUsername = document.querySelector("#github-username")
const githubJoined = document.querySelector("#github-joined")
const githubRepos = document.querySelector("#github-repos")
const githubFollowers = document.querySelector("#github-followers")
const githubFollowing = document.querySelector("#github-following")

//action
const githubActionSearch = document.querySelector("#github-action-search")
const githubInputSearch = document.querySelector("#github-search")


const obtenerDataGithub = async(username="guillermosifu")=>{
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data  = await response.json();

    if(data.message === "Not Found"){
        Swal.fire ({
            title:"Error",
            text:"No existe el usuario",
            icon:"error"
        })
    }

    setDataUser(data)
}


githubActionSearch.onclick=()=>{
    const username = githubInputSearch.value;
   
    githubInputSearch.value="";
    if(username === ""){
        swal.fire({
            title:"Error",
            text:"No puedes ingresar un usuario",
            icon:"error"
        });
        return;
    }
    obtenerDataGithub(username);
}

//vamos a detectar el evento de enter cuando este input

githubInputSearch.addEventListener("keyup", function(event){
    if (event.key=="Enter"){
        obtenerDataGithub(event.target.value)
    }
})




const setDataUser =(data)=>{
    imageProfile.src=data.avatar_url;
    githubName.innerHTML = data.name;
    githubUsername.innerHTML = `@${data.login}`;
    githubJoined.date = data.created_at;
    githubRepos.innerHTML = data.public_repos;
    githubFollowers.innerHTML = data.followers;
    githubFollowing.innerHTML = data.following;
}
obtenerDataGithub();