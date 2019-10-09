// Using XMLHttpRequest and Promise write your own implementation of browesrs fetch method.
// 1. It takes two parameter 'url' and type of request (GET | POST)
// 2. Returns a promise
// 3. Resolve the promise when data is fetched (onload)
// 4. Reject the promise when error occured (onerror)

function fetchData(url,request = 'GET') {
 
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open (request,url);
    xhr.onload = (() => resolve(xhr.response))
    xhr.onerror = (() => reject('Error !'))
    xhr.send();

  })
}
  fetchData('https://api.github.com/users/itzsunny')
  // .then(res => res.json)
  // .then(res => console.log(res))
  // .catch(rej => console.log(rej))
