const form = document.getElementById('form');
const nom = document.getElementById('nom');
const prénom = document.getElementById('prénom');
const adressem = document.getElementById('adressem');
const texte = document.getElementById('texte');
const namefield = document.getElementById('name-field');
const button = document.getElementById('btn1');
const messrep = document.getElementById('messrep');
const message = document.querySelector('.message');
const suitemess = document.getElementById('suitemess')

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    if (nom.value === '' || nom.value === null) {
        alert("Vous n'avez pas renseigné votre nom !");
    }else if (prénom.value === '' || prénom.value === null) {
        alert("Vous n'avez pas renseigné votre prénom !");
    }else if (texte.value === 'Votre texte...' || texte.value === null || texte.value === '') {
        alert("Vous n'avez pas renseigné de texte !");
    } else {
        messrep.textContent += prénom.value;
        messrep.style.color = "black";
        suitemess.style.color = "black"
    }
        });

        //} else {

        //function func1() {
            //namefield.innerHTML = "Merci pour vos retour, " + prénom.value;
       // }

        //button.addEventListener('click', func1);
