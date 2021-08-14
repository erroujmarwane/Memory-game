const grid = document.querySelector('.container')
let result =document.querySelector('.result')
let modal =document.querySelector('.modal')
var cardChosen=[]
var cardChosenId=[]
var cardWon=[]


let cardArray =[
    {
        name:'asta',
        img:'img/asta.jpg'
    },
    {
        name:'asta',
        img:'img/asta.jpg'
    },
    {
        name:'escanor',
        img:'img/escanor.jpg'
    },
    {
        name:'escanor',
        img:'img/escanor.jpg'
    },
    {
        name:'gojo',
        img:'img/gojo.jpg'
    },
    {
        name:'gojo',
        img:'img/gojo.jpg'
    },
    {
        name:'izuku',
        img:'img/izuku.png'
    },
    {
        name:'izuku',
        img:'img/izuku.png'
    },
    {
        name:'natsu',
        img:'img/natsu.jpg'
    },
    {
        name:'natsu',
        img:'img/natsu.jpg'
    },
    {
        name:'sishui',
        img:'img/sishui.jpg'
    },
    {
        name:'sishui',
        img:'img/sishui.jpg'
    },
    {
        name:'sung',
        img:'img/sung.jpg'
    },
    {
        name:'sung',
        img:'img/sung.jpg'
    },
    {
        name:'zoro',
        img:'img/zoro.jpg'
    },
    {
        name:'zoro',
        img:'img/zoro.jpg'
    },
]







cardArray.sort(()=>0.5-Math.random())

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card =document.createElement('img')
        card.setAttribute('src','img/background.jpg')
        card.setAttribute('data-id',i)
        grid.appendChild(card)
        card.addEventListener('click',flipCard)
    }
}


function checkMatch() {
    
    var cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if (cardChosen[0] === cardChosen[1]) {
        cardWon.push(cardChosen)
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
    }else{
        setTimeout(()=>{
        cards[optionOneId].classList.remove('flip');
        cards[optionTwoId].classList.remove('flip');
        setTimeout(()=>{
        cards[optionOneId].setAttribute('src','img/background.jpg')
        cards[optionTwoId].setAttribute('src','img/background.jpg')
        },150)
        
        },1000)
        
        // alert('sorry try again')
    }
    cardChosen=[]
    cardChosenId=[]
    result.innerText=`Score: ${cardWon.length}`
    if (cardWon.length==8) {
        modal.style.display = "block";
    }
}



function flipCard() {
    this.classList.toggle('flip');
    setTimeout(()=>{
    var cardId =this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch,200)
    }
    },100)
    
}

createBoard()










