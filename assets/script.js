const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let position = 0;
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector("#banner .banner-img");
const chemin = "./assets/images/slideshow/";
const bannerText = document.querySelector("#banner p");
const dotsDiv = document.querySelector("div.dots");

showBulletPoints();

const dotElements = document.querySelectorAll(".dot");

// Fonction qui change l'affichage de l'image au défilement sur la gauche
function slideLeft() {
  if (position == 0) {
    position = slides.length - 1;
  } else {
    position--;
  }
  // Ajout des nouvelles caractéristiques au changement du slide
  bannerImg.src = chemin + slides[position].image;
  bannerImg.alt = slides[position].tagLine;
  bannerText.innerHTML = slides[position].tagLine;
  // Mise à jour de la classe des bullet points
  moveBulletPoints();
}
// Ecoute du clic sur la flèche gauche
arrowLeft.addEventListener("click", slideLeft);

const arrowRight = document.querySelector(".arrow_right");

// Fonction qui change l'affichage de l'image au défilement sur la droite
function slideRight() {
  if (position < 3) {
    position++;
  } else {
    position = 0;
  }
  // Ajout des nouvelles caractéristiques au changement du slide
  bannerImg.src = chemin + slides[position].image;
  bannerImg.alt = slides[position].tagLine;
  bannerText.innerHTML = slides[position].tagLine;

  // Mise à jour de la classe des bullet points
  moveBulletPoints();
}
// Ecoute du clic sur la flèche droite
arrowRight.addEventListener("click", slideRight);

// Fonction qui permet la création des bulletsPoints et affiche un point rempli pour le premier élément
function showBulletPoints() {
  for (let i = 0; i < slides.length; i++) {
    const bulletPoint = document.createElement("span");
    if (i <= 0) {
      bulletPoint.className = "dot dot_selected";
    } else {
      bulletPoint.className = "dot";
    }
    dotsDiv.appendChild(bulletPoint);
  }
}

// Fonction pour mettre à jour la classe des bullet points
function moveBulletPoints() {
	for (let i = 0; i < dotElements.length; i++) {
		dotElements[i].classList.remove('dot_selected');
	}
	dotElements[position].classList.add('dot_selected');
}
