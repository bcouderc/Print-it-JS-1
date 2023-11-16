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

// ajout des flèches de navigation
const arrow = document.getElementById('banner'); 
    let arrowDiv = document.createElement('div');
        arrowDiv.classList.add('arrow');

    const imgArrowLeft = document.createElement('img');
        imgArrowLeft.setAttribute('src', './assets/images/arrow_left.png');
        imgArrowLeft.classList.add('arrow_left');
        arrowDiv.appendChild(imgArrowLeft);

    const imgArrowRight = document.createElement('img');
        imgArrowRight.setAttribute('src', './assets/images/arrow_right.png');
        imgArrowRight.classList.add('arrow_right');
        arrowDiv.appendChild(imgArrowRight);

    arrow.appendChild(arrowDiv)

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
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
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
   1 – LE CONTEXTE DE LA MISSION
        •	Faire évoluer le site de Print-It en ajoutant un carrousel d’image au niveau du bandeau supérieur
        •	Insérer des flèches de navigation droite et gauche pour faire défiler les images du carrousel
        •	Insérer des « boulet point » pour indiquer sur quelles images l’on se trouve dans le carrousel

    2 – LES ETAPES POUR LA REALISATION DE LA MISSION
    
        2.1 - Déclaration des slides
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
        
        Cela définit un tableau slides contenant des objets, chaque objet représentant une diapositive du carrousel. Chaque objet a une propriété image (le chemin de l'image) et une propriété tagLine (la ligne de tag).
    
    2.2 - Ajout des flèches dans le code HTML
        const arrow = document.getElementById('banner'); 
            let arrowDiv = document.createElement('div');
                arrowDiv.classList.add('arrow');

            const imgArrowLeft = document.createElement('img');
                imgArrowLeft.setAttribute('src', './assets/images/arrow_left.png');
                imgArrowLeft.classList.add('arrow_left');
                arrowDiv.appendChild(imgArrowLeft);

            const imgArrowRight = document.createElement('img');
                imgArrowRight.setAttribute('src', './assets/images/arrow_right.png');
                imgArrowRight.classList.add('arrow_right');
                arrowDiv.appendChild(imgArrowRight);

            arrow.appendChild(arrowDiv)

        Ce code crée un conteneur div avec la classe 'arrow' qui contient deux images représentant des flèches gauche et droite. Il est ensuite ajouté à l’élément HTML avec l'ID 'banner'.


    2.3 - Ajout des dots dans le code HTML
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
        Ce code crée des éléments HTML représentant des points (dots) pour une présentation de diapositives. Le premier point est marqué comme sélectionné pour indiquer la diapositive actuelle. Les points suivants eux ne sont pas sélectionnés. Ils sont ajoutés au conteneur avec la classe "dots" dans le document HTML.
        Fonctions pour la gestion du carrousel
        Cette partie du code définit les fonctions pour passer à la diapositive suivante ou précédente. Cela permet de mettre à jour l'affichage en conséquence et de gérer l'état des points. Pour déclencher ces fonctions on écoute les événements click sur les flèches de navigation pour appeler ces fonctions.
    
    2.4 - Création de la boucle pour la mise en place du carrousel

        La fonction updateSlide 
        Elle est utilisée pour mettre à jour l'image et le texte de légende du diaporama sur la page en utilisant les informations de la diapositive actuelle en fonction de l'indice (currentIndex).
        
        function updateSlide() {
            bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
            bannerImg.alt = `Slide ${currentIndex + 1}`;

            // Mettre à jour le texte
            const tagLine = slides[currentIndex].tagLine;
            document.querySelector('p').innerHTML = tagLine;
        }

            En détail :
            bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
                Cela met à jour la source (src) d'une image HTML avec l'ID `bannerImg`. L'image est extraite d'un dossier "./assets/images/slideshow/" et le nom du fichier image est récupéré à partir de l'objet situé à l'indice `currentIndex` dans un tableau appelé `slides`.
        
            bannerImg.alt = `Slide ${currentIndex + 1}`;
                Cela met à jour l'attribut "alt" de l'image avec une chaîne de texte indiquant le numéro de la diapositive actuelle. 
        
            const tagLine = slides[currentIndex].tagLine;
                Cela extrait le texte de légende (tagLine) de la diapositive actuelle et le stocke dans une variable appelée `tagLine`.
        
            document.querySelector('p').innerHTML = tagLine;
                Cela met à jour le paragraphe (`<p>`) avec le texte extrait de la diapositive actuelle. Le sélecteur `p` est utilisé pour cibler le paragraphe sur la page.
        
        La fonction majDots
            Cette partie du code parcourt la liste des indicateurs de diapositives (dots) et ajuste leur aspect visuel. Les points correspondant à la diapositive actuelle reçoivent la classe "active", tandis que les autres la perdent. Cela permet de mettre en évidence la diapositive actuelle. 
        
            function majDots(){
                dots.forEach((dot, index) => {
                    dot.classList.toggle('dot_selected', index === currentIndex)
                });
            }

            dots.forEach((dot, index) => { ... }); 
                Cette ligne itère sur tous les indicateurs de diapositives (dots) dans votre carrousel et modifie leur classe en fonction de l'indice actuel (currentIndex). 
    
            dot.classList.toggle('active', index === currentIndex);
                Cette ligne utilise la méthode forEach pour parcourir tous les éléments de la liste dots. Pour chaque élément, deux paramètres sont passés à la fonction de rappel : dot (l'élément lui-même) et index (l'indice de cet élément dans la liste).
                À l'intérieur de la boucle forEach, cette ligne effectue les opérations suivantes :
                    •	dot est l'élément de l'indicateur de diapositive actuel que nous sommes en train de traiter dans la boucle.
                    •	index est l'indice de cet indicateur de diapositive dans la liste.
                    •	dot.classList est l'objet qui gère les classes CSS de l'élément dot.

            dot.classList.toggle('active', index === currentIndex); 
                utilise la méthode toggle pour ajouter ou supprimer la classe "active" de l'élément dot en fonction de la comparaison index === currentIndex.
                •	Si index est égal à currentIndex, cela signifie que cet indicateur de diapositive correspond à la diapositive actuellement affichée (car currentIndex est l'indice de la diapositive actuelle). Dans ce cas, la classe "active" est ajoutée à l'élément dot, ce qui met en évidence l'indicateur de diapositive actuel en lui donnant un style différent.
                •	Si index n'est pas égal à currentIndex, la classe "active" est supprimée de l'élément dot, ce qui réinitialise l'apparence des autres indicateurs de diapositives.
                Cette ligne de code parcourt les indicateurs de diapositives et ajoute la classe "active" à l'indicateur de diapositive correspondant à la diapositive actuellement affichée, tout en supprimant la classe "active" des autres indicateurs. Cela permet de mettre en évidence visuellement la diapositive actuelle en surlignant l'indicateur correspondant.
        
        Fonction nextSlide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlide();
                majDots();
            }
            Elle est responsable de passer à la diapositive suivante dans le carrousel.
            currentIndex = (currentIndex + 1) % slides.length;
                Cette ligne incrémente l'indice de la diapositive actuelle (currentIndex) de 1. 
                L'opérateur % (modulo) est utilisé pour assurer que l'indice reste dans les limites 
                du nombre total de diapositives (slides.length). Lorsque l'indice atteint la fin du 
                carrousel, il revient automatiquement à zéro, ce qui permet de créer un effet de boucle 
                pour passer de la dernière diapositive à la première.
            
            updateSlide();
                Une fois que l'indice a été mis à jour, cette ligne appelle la fonction updateSlide pour mettre à jour l'affichage du carrousel en affichant la nouvelle diapositive correspondant au nouvel indice.
                La fonction nextSlide incrémente l'indice de la diapositive actuelle pour passer à la diapositive suivante et met à jour l'affichage du carrousel en appelant la fonction updateSlide. Cela permet de faire défiler les diapositives vers l'avant lorsque l'utilisateur clique sur la flèche "Next".

        nextArrow.addEventListener('click', nextSlide);
        prevArrow.addEventListener('click', prevSlide);

        Cette ligne de code utilise un événement pour détecter le clic sur un élément HTML identifié par la variable nextArrow et associe cette action à la fonction nextSlide.
        nextArrow : Fait référence à l’élément HTML qui représente une flèche permettant de passer à la diapositive suivante. .addEventListener('click', nextSlide) : Cela attache un écouteur d'événement au bouton représenté par nextArrow. 
                'click' : C'est le type d'événement auquel l'écouteur réagit. Dans ce cas, il s'agit d'un événement de clic de souris.              nextSlide : C'est la fonction qui sera exécutée lorsque l'événement spécifié (clic) se produit sur l'élément nextArrow.
        Cette ligne de code établit une connexion entre le clic de souris sur l'élément représenté par nextArrow et l'exécution de la fonction nextSlide. Cela est souvent utilisé dans les interfaces utilisateur pour permettre à l'utilisateur de déclencher une action, comme passer à la diapositive suivante dans un carrousel, en cliquant sur une flèche ou un bouton.

*/

