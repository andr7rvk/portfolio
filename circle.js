const cercle = document.querySelector(".circle");
const texte = document.querySelector('.text')

/*cercle.addEventListener("click", ()=>{
    cercle.classList.toggle("moreinfo");
    texte.classList.toggle("showinfo");
    texte.style.visibility = "visible"
})*/

cercle.addEventListener("click", () => {
    cercle.classList.toggle("moreinfo");
    
    if (texte.classList.contains("showinfo")) {
        texte.classList.remove("showinfo");
        texte.style.visibility = "hidden";
    } else {
        texte.classList.add("showinfo");
        texte.style.visibility = "visible";
    }
});
/*cercle.addEventListener("click", ()=>{
    cercle.classList.add("lessinfo");
})*/