window.addEventListener('load', (event) => {
    console.log('page is fully loaded');});

function getGit(){
    fetch("https://api.github.com/users/adion81")
    .then(response => response.json() )
    .then(coderData => {
        console.log(coderData);
        let coderName = coderData['name']
        let coderFollowers = " has " + coderData['followers'] + " followers"
        let coderAvatar= coderData['avatar_url']
        console.log(coderName)
        let ptag = document.querySelector("#name")
        let img = document.querySelector("#avatar")
        ptag.innerHTML = coderName + coderFollowers
        img.src = coderAvatar
    })
    .catch(err => console.log(err) );
}
    function search(){
        let user_input = document.querySelector("#input")
        let search_term = user_input.value
        console.log(search_term)
        fetch(`https://api.github.com/users/${search_term}`)
        .then(response => response.json() )
        .then(coderData => {
            console.log(coderData);
            let coderName = coderData['name']
            let coderFollowers = " has " + coderData['followers'] + " followers"
            let coderAvatar= coderData['avatar_url']
            console.log(coderName)
            let ptag = document.querySelector("#name")
            let img = document.querySelector("#avatar")
            ptag.innerHTML = coderName + coderFollowers
            img.src = coderAvatar
        })
        .catch(err => console.log(err) )
        
    }

// keys I need from api: 
// avatar_url
// name
// followers