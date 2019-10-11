// var data = 

function myFetch (url,request = 'GET',event) {

    return new Promise ((resolve,reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(request,url);
    xhr.onload = () => resolve( JSON.parse(xhr.response))
    xhr.onError = () => reject(console.log('ERROR !'))
    xhr.send();

    })
};
myFetch('https://api.reddit.com').then(data => console.log(data) ).catch(rej => console.log(rej));

// document.querySelector('.input').addEventListener('click',myFetch);