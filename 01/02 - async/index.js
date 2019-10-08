/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Howdy or Partnah first?
```
// Partnah
// Howdy

```
/* CHALLENGE 2 */

function delayedGreet() {
  for(var start = 0; start < 1; start++) {
    setTimeout(() => {
      console.log('welcome');
    }, 3000);
  }
 
  // ADD CODE HERE
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log('Hello')
    for(var start = 1; start > 0; start++) {
      setTimeout(()=> {
        console.log('good bye');
      }, 2000);
    }
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE

        setInterval(()=> {
          console.log('Hi Again');
        }, 1000);
      } 

// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
 var i = 0
    var x = setInterval(()=> {
      i++;
      console.log('Hi Again');
      if(i > 4) clearInterval(x);
    }, 1000);
}
// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func,interval,duration) {
  // ADD CODE HERE
  
  interval = interval*1000;
  duration = duration*1000;
  var intervalDuration = setInterval(func, interval);
  setTimeout(() => {
    clearInterval(intervalDuration)
  }, duration);
}

// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
function sayHi() {
  console.log('say Hi');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
everyXsecsForYsecs(sayHi, 1, 5); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
