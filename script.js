const symbols = ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼'];
let cards = [...symbols, ...symbols];
cards = cards.sort(() => Math.random() - 0.5);

const cardContainer = document.getElementById("cardContainer");

cards.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add("card");
    card.textContent = symbol;

    cardContainer.appendChild(card);
});

