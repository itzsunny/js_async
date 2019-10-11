// Your code goes here

function getUser (event,str=null) {
    
    function getAvatar(src) {
    document.querySelector('.user_img').src = src.avatar_url;
    var display = document.querySelector('.display');
    display.style.backgroundColor = "rgba(0,0,0,0.1)";
    document.getElementById('name').innerText = src.name;
    document.getElementById('user_name').innerText = `(${src.login})`;
    document.getElementById('bio').innerText = src.bio;
    document.getElementById('followers').innerText = `Followers: ${src.followers}`;
    document.getElementById('following').innerText = `Following: ${src.following}`;
    document.getElementById('repos').innerText = `Repos: ${src.public_repos}`;
    var Gists = document.getElementById('gists');

    if(src.gists != undefined){
        return Gists.innerText = src.gists;
    } else {
        return Gists.innerText = "Gists:";
    }
    }


    let input = document.getElementById('input').value;
    let xhr = new XMLHttpRequest();
    xhr.onload = () => 
        {
        console.log(JSON.parse(xhr.response));
        let data = JSON.parse(xhr.response);
        if(str){
            if(data.message == 'Not Found'){
                document.querySelector('.logo_img').src = 'notfound.png';
            } else {
                document.querySelector('.logo_img').src = data.avatar_url;
            }
        } else{
            getAvatar(data);
        }
        };

    xhr.open("GET",`https://api.github.com/users/${input}`)
    xhr.send();

}
document.querySelector('#input').addEventListener('keyup',(e) => getUser(e,'keyup') )

document.querySelector('.search').addEventListener('click',getUser);
