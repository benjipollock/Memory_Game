/**
 * Created by itc_user on 6/30/2016.
 */
var numDifCards = 8;
var clickedCards = [];
var cardsToFlip = [];
var clickDisabled = false;
var wrongnessCounter = 0;
var pictures = [
    {src: "images/1.jpg"},
    {src: "images/2.jpg"},
    {src: "images/3.jpg"},
    {src: "images/4.jpg"},
    {src: "images/5.jpg"},
    {src: "images/6.jpg"},
    {src: "images/7.jpg"},
    {src: "images/8.jpg"},
    {src: "images/9.jpg"},
    {src: "images/10.jpg"},
    {src: "images/11.jpg"},
    {src: "images/12.jpg"}
];

var cardRandomizer = function (){

        for (var h = 0; h<numDifCards*2; h++){
            if (h >= numDifCards){
                cardsToFlip.push(pictures[h%numDifCards]);
            }
            else{
                cardsToFlip.push(pictures[h]);
            }

        }

    console.log(JSON.stringify(cardsToFlip));

    for (var i = cardsToFlip.length -1; i >= 0; i--){
        var j = Math.floor(Math.random()*(i+1));
        var temp = cardsToFlip[i];
        cardsToFlip[i] = cardsToFlip[j];
        cardsToFlip[j] = temp;
    }
    console.log(JSON.stringify(cardsToFlip));
};
window.onload = cardRandomizer();

var displayCard = function(clickEvent){
    if (clickDisabled === false) {
        clickEvent.target.className = 'uncovered';
        clickEvent.target.style.backgroundImage = "url(" + clickEvent.target.getAttribute('src') + ")";
        clickedCards.push(clickEvent.target);
        console.log(clickedCards);
        console.log(clickedCards[0].getAttribute('src'));

        if (clickedCards.length === 2) {
            if (clickedCards[0].getAttribute('src') === clickedCards[1].getAttribute('src')) {
                console.log("in loop" + clickedCards);
                console.log('woohoo!');
                clickedCards = [];
            }
            else {
                clickDisabled = true;
                setTimeout(function () {
                    clickedCards[0].className = 'covered';
                    clickedCards[0].style.backgroundImage = "url('http://www.lostvalleyobservatory.com/sitebuildercontent/sitebuilderpictures/pelican.best.web.lrprgb.overlay.jpg')";
                    clickedCards[1].className = 'covered';
                    clickedCards[1].style.backgroundImage = "url(http://www.lostvalleyobservatory.com/sitebuildercontent/sitebuilderpictures/pelican.best.web.lrprgb.overlay.jpg)";
                    clickedCards = [];
                    clickDisabled = false;
                    wrongnessCounter++;
                }, 1000);

            }
        }
    }
};

var createBoard = function(){
    
    for (var i = 0; i < numDifCards*2; i++){
        var card = document.createElement('div');
        card.className = 'covered';
        card.setAttribute('src', cardsToFlip[i].src);
        document.getElementsByClassName('gameboard')[0].appendChild(card);
        card.addEventListener('click', displayCard);
    }

};
window.onload = createBoard();
