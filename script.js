// Creo array con i membri del team e relative info
const teamMember = [
    {
        'name' : 'Wayne Barnett',
        'role' : 'Founder & CEO',
        'image' : 'wayne-barnett-founder-ceo.jpg'
    },

    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'image' : 'angela-caroll-chief-editor.jpg'
    },

    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'image' : 'walter-gordon-office-manager.jpg'
    },

    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'image' : 'angela-lopez-social-media-manager.jpg'
    },

    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'image' : 'scott-estrada-developer.jpg'
    },
    
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'image' : 'barbara-ramos-graphic-designer.jpg'
    },
];

const container = document.querySelector(".container");

// Loop in cui creo elementi e inserisco contenuto
for (let i = 0; i < teamMember.length; i++) {
    // creo card
    const card = document.createElement("div");
    
    // aggiungo classe alla card
    card.classList.add("card");

    // inserisco la card nel container
    container.append(card);

    // creo immagine
    const img = document.createElement("img");

    // modifico l'attributo src del tag <img>
    img.src = `img/${teamMember[i].image}`;

    // inserisco l'img nella card singola
    card.append(img);

    // creo il div della descrizione img
    const description = document.createElement("div");

    // aggiungo classe 
    description.classList.add("description");

    // nell innerHTML inserisco vari elementi con relativo contenuto
    description.innerHTML = `<h4>${teamMember[i].name}</h4> <p>${teamMember[i].role}</p>`;

    // inserisco il dis.description nella card
    card.append(description);
}