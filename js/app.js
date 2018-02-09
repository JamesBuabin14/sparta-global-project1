$(document).ready(function() { //When the page loads

  var cards = document.getElementsByClassName("card");
  //The variable cards gets the class name "cards" where the list in the HTML where the class names will be stored in

  var array = [];

  var score = 0;

  var count;

  //Fisher-yates shuffle method
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex; //Gets the current array

    // While there remain elements to shuffle...
    while (0 !== currentIndex) { //While the array is not equalled to zero it goes through the array

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1; //Generates a random number each time the loop passes and saves in the current index

      // And swap it with the current element.
      temporaryValue = array[currentIndex]; //Gets the current index position stores in temporary value
      array[currentIndex] = array[randomIndex]; //The position of the random number is grabbed by the array of the current position
      array[randomIndex] = temporaryValue; //This switches the current index position with the array position
    }

    return array; //restores the card position back to the array
  }


  var card_array = ["card1", "card1", "card2", "card2", "card3", "card3", "card4", "card4", "card5", "card5", "card6", "card6", "card7", "card7", "card8", "card8"]; //Each card element will contain one of these elements which will be used as ID's
  arr = shuffle(card_array);

  document.getElementById("score").innerHTML = " Your score :" + score; //Gets a score that has been counted up

  for (var i = 0; i < cards.length; i++) { //loop which goes through the card array
    cards[i].setAttribute("id", card_array[i]); //sets each with an with an ID from the card_array
    cards.className += (" selected"); //confirms if the card has been selected



    cards[i].addEventListener('click', function(e) { //On the event of a click on a card
      // console.log(e.target);
      if (this.id == "card1") { //Goes to the first card element from the list
        this.style.backgroundImage = "url('../img/Arsenal-icon.png')"; //Styles the first element with the arsenal logo
      } else if (this.id == "card2") {
        this.style.backgroundImage = "url('../img/Burnley_icon.png')";
      } else if (this.id == "card3") {
        this.style.backgroundImage = "url('../img/Chelsea_icon2.png')";
      } else if (this.id == "card4") {
        this.style.backgroundImage = "url('../img/Everton_icon.png')";
      } else if (this.id == "card5") {
        this.style.backgroundImage = "url('../img/Liverpool_icon.png')";
      } else if (this.id == "card6") {
        this.style.backgroundImage = "url('../img/ManchesterCity_icon.png')";
      } else if (this.id == "card7") {
        this.style.backgroundImage = "url('../img/ManU_icon.png')";
      } else if (this.id == "card8") {
        this.style.backgroundImage = "url('../img/Southampton_icon.png')";
      }
      array.push(this);
      // Every click is pushing the current card into the blank array

      // If cards match
      if (array.length == 2 && array[0].id == array[1].id) {
        //if one and a second of cards are selected of the array
        // cards stay face up, increase the score and clear the array
        score++;
        document.getElementById("score").innerHTML = "Your Score" + ":" + score;
        array = [];

      } else if (array.length == 2) {
        // turn cards face down and clear the array
        var startTime = setTimeout(function() {
          array[0].style.backgroundImage = "url('../img/card_back.jpg')"; //Sets the background the the back of the card
          array[0].innerHTML = "";
          array[1].style.backgroundImage = "url('../img/card_back.jpg')";
          array[1].innerHTML = "";
          array = [];
        }, 1000)
      }

      if (score === 8) {
        //Removes all the cards from the container
        $('.container').empty();
        $('.animate-win').animate({
          left: '250px'
        }); //Calls the id from the html and activates a jquery animate slide the element from the left
        var banner = $(".animate-win");
        $('.container').empty();

        //Creates text
        var paragraph = document.getElementById("p");
        var text = document.createTextNode("You Win!!");

        // 1. Create the button
        paragraph.appendChild(text);
        var button3 = document.createElement("button");
        button3.innerHTML = "Play game";

        // 2. Append somewhere
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        // 3. Add event handler
        button3.addEventListener("click", function() {
          window.location.href = "game.html";
        });

        // 1. Create the button
        var button4 = document.createElement("button");
        button4.innerHTML = "Return home";

        // 2. Append somewhere
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button4);

        // 3. Add event handler
        button4.addEventListener("click", function() {
          window.location.href = "index.html";
        });




        clearTimeout(timer);


        if (count === 0 && score < 8) {

        }

      }


    })


  }


  //TIMER!!
  var count = 60; //sets the timer to 60 seconds

  var counter = setInterval(timer, 1000); //1000 will run it every 1 second

  function timer() {
    count = count - 1; //countdown
    if (count === 0) {
      clearInterval(counter); //Clear interval stops the countdown of the set interval
      //counter ended, do something here
      console.log("Game over");
      $('.container').empty();
      $('.lose').animate({
        left: '250px'
      });
      var banner = $(".animate");

      for (var i = 0; i < 999; i++) {

        banner.css("opacity", "1");
        banner.animate({
          left: 400
        }, 1000);

        for (var k = 0; k < 5; k++) {
          banner.animate({
            opacity: 0
          }, 600);
          banner.animate({
            opacity: 1
          }, 600); //blinks
        }

        banner.delay(2000).animate({
          left: 1200
        }, 1000);
        banner.animate({
          left: -600
        }, 0); //animation slide off

      }

      // 1. Create the button
      var button = document.createElement("button");
      button.innerHTML = "Retry game";

      // 2. Append somewhere
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(button);

      // 3. Add event handler
      button.addEventListener("click", function() {
        window.location.href = "game.html";
      });

      // 1. Create the button
      var button2 = document.createElement("button");
      button2.innerHTML = "Return home";

      // 2. Append somewhere
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(button2);

      // 3. Add event handler
      button2.addEventListener("click", function() {
        window.location.href = "../index.html";
      });

    }

    //Do code for showing the number of seconds here
    document.getElementById("timer").innerHTML = count + " secs"; //Displays the amount of seconds in the html
  }

  shuffle(card_array); //performs shuffle function
});
