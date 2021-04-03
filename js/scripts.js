window.onload = () => {
    // On va chercher tous les éléments
    const elts = document.querySelectorAll(".accordion-element");
    // On récupère l'élément actif
    const firstActive = document.querySelector(".accordion .active");
    // On va chercher la balise p qui se trouve à l'intérieur
    let section = firstActive.children[1].querySelector("p");
    
    // On récupère la hauteur de section
    let sectionHeight = section.offsetHeight + 20;

    // On définit la hauteur de .accordion-content
    firstActive.children[1].style.height = sectionHeight+"px";

    for(let elt of elts){
        elt.addEventListener("click", function(){
            // On récupère l'élément actif
            const active = document.querySelector(".accordion .active");
            // On lui retire la classe "active"
            active.classList.remove("active");
            // On réduit sa hauteur
            active.children[1].style.height = 0;

            // On met la classe active à l'élément cliqué
            this.classList.add("active");

            // On récupère la hauteur de la balise p
            let section = this.children[1].querySelector("p");
    
            // On récupère la hauteur de section
            let sectionHeight = section.offsetHeight + 20;
        
            // On définit la hauteur de .accordion-content
            this.children[1].style.height = sectionHeight+"px";
        });
    }
}