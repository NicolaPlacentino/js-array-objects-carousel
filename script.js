/*Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come ispirandovi alla foto allegata. Se volete cambiare la grafica siete liberi di farlo.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico:
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.
Milestone 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra,
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.*/


const data = [
    {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morales',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carousel = document.getElementById('carousel')
const thumbnails = document.getElementById('thumbnails')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

function changePic(target) {
    carouselFigures[currentActiveIndex].classList.remove('active')
    thumbnailFigures[currentActiveIndex].classList.remove('active')

    if (target === 'next'){
        currentActiveIndex++
    } else if (target === 'prev'){
        currentActiveIndex--
    } else {
        currentActiveIndex = target
    }
    
    if (currentActiveIndex < 0){currentActiveIndex =  data.length-1}
    if (currentActiveIndex === data.length){currentActiveIndex = 0}

    carouselFigures[currentActiveIndex].classList.add('active')
    thumbnailFigures[currentActiveIndex].classList.add('active')
}

for (i = 0; i < data.length; i++){
    thumbnails.innerHTML += `
    <figure class="thumbnail-figure">
        <img src="${data[i].image}" alt="gioco-${i}">
    </figure>`

    carousel.innerHTML += `
    <figure class="carousel-figure p-relative">
        <img src="${data[i].image}" alt="gioco-${i}">
        <figcaption class="p-absolute">
            <h3>${data[i].title}</h3>
            <p>${data[i].text}</p>
        </figcaption>
    </figure>`
}

const carouselFigures = document.querySelectorAll('.carousel-figure')
const thumbnailFigures = document.querySelectorAll('.thumbnail-figure')

let currentActiveIndex = 0

carouselFigures[currentActiveIndex].classList.add('active')
thumbnailFigures[currentActiveIndex].classList.add('active')

next.addEventListener('click', function () {

    changePic('next')

})

prev.addEventListener('click', function () {

    changePic('prev')

})

for (let i = 0; i < thumbnailFigures.length; i++){
    const thumbFigure = thumbnailFigures[i]

    thumbFigure.addEventListener('click', ()=>{
        changePic(i)
    })
}

const Cycleimages = setInterval(changePic, 5000, 'next')