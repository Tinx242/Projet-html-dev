document.addEventListener("DOMContentLoaded", () => {

    console.log("loaded ok !!!");

    let elTitre;
    /*  elTitre = document.querySelector("title")
     elTitre.innerText = "Développement PHP"
     mainTitle.innerText += " et développement PHP" */
    const mainTitle = document.querySelectorAll("title, h1");
    mainTitle.forEach(el => el.innerText = "Développeur PHP");
});