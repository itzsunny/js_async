// Your code goes here

function getUser (event,str=null) {
    
    function getAvatar(src) {
    document.querySelector('.user_img').src = src.avatar_url;
    }

    let input = document.getElementById('input').value;
    console.log(input)
    let xhr = new XMLHttpRequest();
    xhr.onload = () => 
        {
        console.log(JSON.parse(xhr.response));
        let data = JSON.parse(xhr.response);
        document.querySelector('.display').style.backgroundColor = "rgba(0,0,0,0.1)";
        document.getElementById('name').innerText = data.name;
        document.getElementById('bio').innerText = data.bio;
        document.getElementById('followers').innerText = data.followers_url;
        document.getElementById('following').innerText = data.following_url;
        document.getElementById('repos').innerText = data.repos_url;
        document.getElementById('gists').innerText = data.gists_url;

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
