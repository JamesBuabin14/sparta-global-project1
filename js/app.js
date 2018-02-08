$(document).ready(function() { //When the page loads



  //newGame();


  var cards = document.getElementsByClassName("card");
  //The variable cards gets the class name "cards" where the list in the HTML where the class names will be stored in

  var array = [];

  var score = 0;

  var tiles_flipped = 0;

  var count;

  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var card_array = ["card1", "card1", "card2", "card2", "card3", "card3", "card4", "card4", "card5", "card5", "card6", "card6", "card7", "card7", "card8", "card8"];
arr = shuffle(card_array);
var image_array = ["Arsenal-icon.png", "Arsenal-icon.png", "Burnley_icon.png", "Burnley_icon.png", "Chelsea_icon.png", "Chelsea_icon.png", "Everton_icon.png", "Everton_icon.png", "Liverpool_icon.png", "Liverpool_icon.png", "ManchesterCity_icon.png", "ManchesterCity_icon.png", "ManU_icon.png", "ManU_icon.png", "Southampton_icon.png", "Southampton_icon.png"];


  document.getElementById("score").innerHTML = " Your score :" + score; //Gets a score that has been counted up



  // function newGame() {
  //     tiles_flipped = 0;
  //     var output = '';
  //     array.shuffle();
  //     for (var i = 0; i < array.length; i++) {
  //       output += '<div id="card'+i+'" cards[i].addEventListener(this, \ '' +card_array[i]+'\')"><div>';
  //     }
  //
  // }


  for (var i = 0; i < cards.length; i++) {
    cards[i].setAttribute("id", card_array[i]);
    cards.className += (" selected");

    //For loop that looks in the card list and looks for how many there are.

    //Sets the cards with an id from the card_array list


    cards[i].addEventListener('click', function(e) {
      // console.log(e.target);
      if(this.id == "card1") {
        this.style.backgroundImage = "url('./img/Arsenal-icon.png')";
      } else if(this.id == "card2") {
        this.style.backgroundImage = "url('./img/Burnley_icon.png')";
      }
      else if(this.id == "card3") {
        this.style.backgroundImage = "url('./img/Chelsea_icon.png')";
      }
      else if(this.id == "card4") {
        this.style.backgroundImage = "url('./img/Everton_icon.png')";
      }
      else if(this.id == "card5") {
        this.style.backgroundImage = "url('./img/Liverpool_icon.png')";
      }
      else if(this.id == "card6") {
        this.style.backgroundImage = "url('./img/ManchesterCity_icon.png')";
      }
      else if(this.id == "card7") {
        this.style.backgroundImage = "url('./img/ManU_icon.png')";
      }
      else if(this.id == "card8") {
        this.style.backgroundImage = "url('./img/Southampton_icon.png')";
      }
      array.push(this);
      // Every click is pushing the current card into the blank array

      // If cards match
      if (array.length == 2 && array[0].id == array[1].id) {
        // cards stay face up, increase the score and clear the array
        score++;
        document.getElementById("score").innerHTML = "Your Score" + ":" + score;
        array = [];

    } else if(array.length == 2){
        // turn cards face down and clear the array
        var startTime = setTimeout(function() {
          console.log(array[0]);
          array[0].style.backgroundImage = "url('img/card_back.jpg')";
          array[0].innerHTML = "";
          array[1].style.backgroundImage = "url('img/card_back.jpg')";
          array[1].innerHTML = "";
          array = [];
        }, 1000)
      }

      if (score === 8) {
        console.log("You are the winner");
        //<input type="button" value="Reload Page" onClick="window.location.reload()">
        clearTimeout(timer);


        if (count === 0 && score < 8) {
          console.log("You lose");
        }

      }


    })


  }

  function assignCards() {
    for (var i = x.length - 1; i > 0; i--) {
      cards[i].setAttribute(x[rand]);
      //Sets the random position to the original card list
    }

  }




  //TIMER!!
  var count = 30;

  var counter = setInterval(timer, 1000); //1000 will run it every 1 second

  // if (score == 24) {
  //   alert("You win");
  // }

  function timer() {
    count = count - 1;
    if (count === 0) {
      clearInterval(counter); //Clear interval stops the countdown of the set interval
      //counter ended, do something here
      console.log("Game over");
      $('.container').empty();
      $('.lose').animate({left: '250px'});
      var banner = $(".animate");

for (var i=0; i<999; i++) {

  banner.css("opacity", "1");
  banner.animate({left: 400}, 1000);

  for (var k=0; k<5; k++) {
    banner.animate({opacity: 0}, 600);
    banner.animate({opacity: 1}, 600);
  }

  banner.delay(2000).animate({left: 1200}, 1000);
  banner.animate({left: -600}, 0);

}

    }

    //Do code for showing the number of seconds here
    document.getElementById("timer").innerHTML = count + " secs"; // watch for spelling
  }




  shuffle(card_array);
});
