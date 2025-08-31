const symbols = ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼'];
let cards = [...symbols, ...symbols];
cards = cards.sort(() => Math.random() - 0.5);

const cardContainer = document.getElementById("cardContainer");

let flipped = [];   
let lock = false;


cards.forEach(symbol => {
    const card = document.createElement('div');
    card.classList.add("card");
    card.textContent = symbol;
    card.addEventListener("click",() =>{
        flippedCard(card);
    })
    cardContainer.appendChild(card);
});

function flippedCard(card){
    if (lock) return;
    if (card.classList.contains("flipped") || card.classList.contains("matched")) return;

    card.classList.add("flipped");
    flipped.push(card);

    if(flipped.length === 2){
        checkMatch();
    }
}

function checkMatch(){
    const [card1, card2] = flipped;
    if(card1.textContent === card2.textContent){
        card1.classList.add("matched");
        card2.classList.add("matched");
        flipped = [];
        checkWin();
    }else{
        lock = true;
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flipped = [];
            lock = false;
        },1000)
    }
}

function checkWin(){
    if (document.querySelectorAll(".matched").length === cards.length){
        alert("You win!");
    }
}

const restartGameBtn = document.getElementById("restartGameBtn");
restartGameBtn.addEventListener("click",() => {
    location.reload();
})
