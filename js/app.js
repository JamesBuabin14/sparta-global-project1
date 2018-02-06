$(document).ready(function(){ //When the page loads


    var cards = document.getElementsByClassName("card");
    //The variable cards gets the class name "cards" where the list in the HTML where the class names will be stored in

    var card_array = ["card1", "card1", "card2", "card2", "card3", "card3", "card4", "card4", "card5", "card5", "card6", "card6", "card7", "card7", "card8", "card8"];

    var array = [];

    var score = 0;

    document.getElementById("score").innerHTML= " Your score :" + score ; //Gets a score that has been counted up
    if (score = 8) {
      alert("You win");
    }



    for (var i = 0; i < cards.length; i++) {
      cards[i].setAttribute("id", card_array[i]);
      cards.className += (" selected");

      //For loop that looks in the card list and looks for how many there are.

      //Sets the cards with an id from the card_array list


      cards[i].addEventListener('click', function(e){
        // Every click is pushing the current card into the blank array
        array.push(e.target);
        // check that its working
        console.log(array);

        if(array.length == 2) { //If the list gathers two cards in the array that have been selected
          if (array[0].id == array[1].id){ //This will check to see if the corresponding cards are the same
            score++; //Adds 1 to the score
            console.log(score);
            array[0].style.backgroundColor = 'red';
            array[1].style.backgroundColor = 'red';
            array = [];
            }
          } else if (array[0].id == array[0].id || array[1].id   == array[1].id){ // If the cards do not match
            array[0].style.display = "none";
            array[1].style.display = "none";
            array = [];
          }

      })


    }



    function shuffle(x){
      // console.log(x);
      //An algorithm that shuffles the card list
      var rand;
      var temporary;
      for (var i = x.length-1; i > 0; i--) { //Gets the card list
        rand = Math.floor(Math.random() * i); //Random method will be store in the variable rand
        // console.log(rand);
        temporary = x[i]; //Card with its position will be stored in temporary variable
        x[i] =  x[rand]; //Random number will then be placed with
        x[rand] = temporary;  //The cards position will be then stored in the x rand variable
      }

    }

    function assignCards() {
      for (var i = x.length-1; i > 0; i--) {
        cards[i].setAttribute(x[rand]);
        //Sets the random position to the original card list
      }

      }

      //TIMER!!
      var count=30;

      var counter=setInterval(timer, 1000); //1000 will run it every 1 second

      function timer()
      {
        count=count-1;
        if (count < 0)
        {
        clearInterval(counter); //Clear interval stops the countdown of the set interval
     //counter ended, do something here
     alert("Game Over!")
    return;
        }




  //Do code for showing the number of seconds here
document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}

//Score!!!

function score(){
  if (count > 0) {
      document.getElementById("score").innerHTML="Your Score" + ":" + score;
  }
}

  shuffle(card_array);
});
