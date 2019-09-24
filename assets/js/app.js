// variables
const listaTweets = document.getElementById('lista-tweets')

// event listeners

eventListeners();

function eventListeners(){
  //
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);

  listaTweets.addEventListener('click', borrarTweet);
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
}

function borrarTweet(e){
  e.preventDefault();
  if(e.target.className === 'borrar-tweet'){
    console.log(e.target.parentElement.remove());
  }
}
