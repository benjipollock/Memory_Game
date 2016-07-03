/**
 * Created by itc_user on 6/30/2016.
 */
document.body.style.backgroundImage = "url(images/bg.jpg)";
var cardsToFlip = [];
var clickDisabled = false;
var wrongnessCounter = 0;
var galaxyBackground = "url('http://www.lostvalleyobservatory.com/sitebuildercontent/sitebuilderpictures/pelican.best.web.lrprgb.overlay.jpg')";
var waterBackground = "url('http://www.freeiconspng.com/uploads/water-png-splash-of-water-2-10.png')"; 
var coolBackground = "url(images/texture.jpg)";
var animals = [
    {src: "images/animals/1.jpg"},
    {src: "images/animals/2.jpg"},
    {src: "images/animals/3.jpg"},
    {src: "images/animals/4.jpg"},
    {src: "images/animals/5.jpg"},
    {src: "images/animals/6.jpg"},
    {src: "images/animals/7.jpg"},
    {src: "images/animals/8.jpg"},
    {src: "images/animals/9.jpg"},
    {src: "images/animals/10.jpg"},
    {src: "images/animals/11.jpg"},
    {src: "images/animals/12.jpg"}
];
var logos = [
    {src: "images/logos/facebook.png"},
    {src: "images/logos/google.png"},
    {src: "images/logos/instagram.png"},
    {src: "images/logos/lamborghini.png"},
    {src: "images/logos/linkedin.png"},
    {src: "images/logos/pinterest.png"},
    {src: "images/logos/reddit.png"},
    {src: "images/logos/snapchat.png"},
    {src: "images/logos/tesla.png"},
    {src: "images/logos/tumblr.png"},
    {src: "images/logos/twitter.png"},
    {src: "images/logos/vine.png"}
];
var flags = [
    {src: "images/coding/angular.png"},
    {src: "images/coding/bootstrap.png"},
    {src: "images/coding/c++.png"},
    {src: "images/coding/django.png"},
    {src: "images/coding/html.png"},
    {src: "images/coding/java.png"},
    {src: "images/coding/jquery.png"},
    {src: "images/coding/js.png"},
    {src: "images/coding/mongo.png"},
    {src: "images/coding/node.png"},
    {src: "images/coding/python.png"},
    {src: "images/coding/ruby.png"}
];

var pictures = animals;
var background = coolBackground;
var numDifCards = 8;
//
// var pictures = //choice
// var background = //choice
// var numDifCards = //choice


var cardRandomizer = function (){

        for (var h = 0; h<numDifCards*2; h++){
                cardsToFlip.push(pictures[h%numDifCards]);
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
