const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
// ajout des dots dans le code HTML

const newDot = document.querySelector('.dots');

for(let i = 0; i < slides.length; i++){
    let newDiv = document.createElement('div');

    if (i === 0){        
        newDiv.classList.add('dot','dot_selected')
    }
    else{
        newDiv.className='dot'
    }
    newDot.appendChild(newDiv)
}

const prevArrow = document.querySelector('.arrow_left');
const nextArrow = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');

const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlide() {
	bannerImg.src = `/assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    // Mettre à jour le texte
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;
}

function majDots(){
    dots.forEach((dot, index) => {
		dot.classList.toggle('dot_selected', index === currentIndex)
	});
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlide();
    majDots();
  }
  
  function prevSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateSlide();
    majDots();
  }
  
  nextArrow.addEventListener('click', nextSlide);
  prevArrow.addEventListener('click', prevSlide);
  
  updateSlide();


  /*  
    La fonction updateSlide est utilisée pour mettre à jour le contenu du carrousel en fonction de l'indice de la diapositive actuelle (currentIndex).
    Explication de cette fonction :
    
    bannerImg.innerHTML
        Cette ligne met à jour le contenu HTML de l'élément avec la classe "banner-img", qui est l'endroit où les images et les légendes 
        des diapositives sont affichées.

    <img src="${slides[currentIndex].image}" alt="Slide ${currentIndex + 1}" />
        Cette partie du code insère la balise <img> dans l'élément "bannerImg" avec l'attribut "src" contenant l'URL de l'image de la 
        diapositive actuelle (selon l'indice currentIndex) et un attribut "alt" pour une description textuelle de l'image.

    <div class="tagLine">${slides[currentIndex].tagLine}</div>
        Cela insère le texte de la légende de la diapositive actuelle (selon currentIndex) dans une balise <div> avec la classe 
        "tagLine". La légende est extraite à partir de la liste slides.

    dots.forEach((dot, index) => { ... })
        Cette partie du code parcourt la liste des indicateurs de diapositives (dots) et ajuste leur aspect visuel. 
        Les points correspondant à la diapositive actuelle reçoivent la classe "active", tandis que les autres la perdent.
        Cela permet de mettre en évidence la diapositive actuelle. 

    La fonction updateSlide met à jour le contenu de la diapositive en fonction de l'indice actuel, ce qui permet de faire défiler les diapositives

    La fonction nextSlide est responsable de passer à la diapositive suivante dans le carrousel.
    Explication de cette fonction :

    currentIndex = (currentIndex + 1) % slides.length;
        Cette ligne incrémente l'indice de la diapositive actuelle (currentIndex) de 1. L'opérateur % (modulo) est utilisé 
        pour assurer que l'indice reste dans les limites du nombre total de diapositives (slides.length). Lorsque l'indice
        atteint la fin du carrousel, il revient automatiquement à zéro, ce qui permet de créer un effet de boucle pour passer 
        de la dernière diapositive à la première.

    updateSlide();
        Une fois que l'indice a été mis à jour, cette ligne appelle la fonction updateSlide pour mettre à jour l'affichage du 
        carrousel en affichant la nouvelle diapositive correspondant au nouvel indice.

    La fonction nextSlide incrémente l'indice de la diapositive actuelle pour passer à la diapositive suivante et met à jour 
    l'affichage du carrousel en appelant la fonction updateSlide. Cela permet de faire défiler les diapositives vers l'avant lorsque 
    l'utilisateur clique sur la flèche "Next".

    dots.forEach((dot, index) => { ... }); itère sur tous les indicateurs de diapositives (dots) dans votre carrousel et modifie
    leur classe en fonction de l'indice actuel (currentIndex). 
        
    Voici une explication plus détaillée :

    dots.forEach((dot, index) => { ... });
        Cette ligne utilise la méthode forEach pour parcourir tous les éléments de la liste dots. Pour chaque élément, deux paramètres
        sont passés à la fonction de rappel : dot (l'élément lui-même) et index (l'indice de cet élément dans la liste).

    dot.classList.toggle('active', index === currentIndex);
        À l'intérieur de la boucle forEach, cette ligne effectue les opérations suivantes :
            - dot est l'élément de l'indicateur de diapositive actuel que nous sommes en train de traiter dans la boucle.
            - index est l'indice de cet indicateur de diapositive dans la liste.
            - dot.classList est l'objet qui gère les classes CSS de l'élément dot.

            dot.classList.toggle('active', index === currentIndex); utilise la méthode toggle pour ajouter ou supprimer la classe "active" de l'élément 
            dot en fonction de la comparaison index === currentIndex.

            Si index est égal à currentIndex, cela signifie que cet indicateur de diapositive correspond à la diapositive actuellement affichée 
            (car currentIndex est l'indice de la diapositive actuelle). Dans ce cas, la classe "active" est ajoutée à l'élément dot, ce qui met en 
            évidence l'indicateur de diapositive actuel en lui donnant un style différent.
            Si index n'est pas égal à currentIndex, la classe "active" est supprimée de l'élément dot, ce qui réinitialise l'apparence des autres 
            indicateurs de diapositives.

Cette ligne de code parcourt les indicateurs de diapositives et ajoute la classe "active" à l'indicateur de diapositive correspondant à la 
diapositive actuellement affichée, tout en supprimant la classe "active" des autres indicateurs. Cela permet de mettre en évidence visuellement la 
diapositive actuelle en surlignant l'indicateur correspondant.
*/

