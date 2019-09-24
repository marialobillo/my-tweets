// variables
const listaTweets = document.getElementById('lista-tweets')

// event listeners

eventListeners();

function eventListeners(){
  //
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);

  listaTweets.addEventListener('click', borrarTweet);

  // dom content done
  document.addEventListener('DOMContentLoaded', localStorageReady);
}

// functions

function agregarTweet(e){
  e.preventDefault();
  // read the input
  const tweet = document.getElementById('tweet').value;
  // create delete button
  const botonBorrar = document.createElement('a');
  botonBorrar.classList = 'borrar-tweet';
  botonBorrar.innerText = 'X';

  // create element
  const li = document.createElement('li');
  li.innerText = tweet;
  // adding delete botton
  li.appendChild(botonBorrar);
  // add the tweet to the list
  listaTweets.appendChild(li);

  // add to Local Storage
  agregarTweetLocalStorage(tweet);
}

// deleting the tweet from the DOM
function borrarTweet(e){
  e.preventDefault();
  if(e.target.className === 'borrar-tweet'){
    e.target.parentElement.remove();
    borrarTwerrtLocalStorage(e.target.parentElement.innerText);
  }
}

// show data from local Storage
function localStorageReady(){
  let tweets;

  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function(tweet){
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // create element
    const li = document.createElement('li');
    li.innerText = tweet;
    // adding delete botton
    li.appendChild(botonBorrar);
    // add the tweet to the list
    listaTweets.appendChild(li);
  });
}

// Add tweet to local Storage
function agregarTweetLocalStorage(tweet){
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  // add the new tweet
  tweets.push(tweet);
  // convert
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

// checking elements in localStorage
function obtenerTweetsLocalStorage(){
  let tweets;
  // revisamos los valores de local storage
  if(localStorage.getItem('tweets') === null){
    tweets = []
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets') );
  }
  return tweets;
}

// delete tweet from local storage
function borrarTwerrtLocalStorage(tweet){
  let stweets, tweetBorrar;
  tweetBorrar = tweet.substring(0, tweet.length - 1);

  console.log(tweetBorrar)


}
