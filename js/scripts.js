var isHipster;
var likesStarbucks;
var networks;
var cantEven;
var likesToRide;
var canPedalUphill;
var justBeer;
var knowsHuxley;

var storesAnswer;

var destination;
var getDestination = function(foo) {
  switch (foo) {
    case 0:
        if (isHipster || likesStarbucks) {
          destination = "Seattle";
        }
        break;
    case 1:
        if (networks) {
          if (cantEven) {
            destination = "Los Angeles";
          } else {
            destination = "Brooklyn";
          }
        }
        break;
    case 2:
        if (!likesToRide) {
          destination = "Brooklyn";
        }
        break;
// if (!canPedalUphill) exists elsewhere
    case 3:
        if (justBeer) {
          destination = "Portland";
        } else {
          destination = "Austin";
        }
        break;
    case 4:
        if (knowsHuxley) {
          destination = "San Fransisco";
        } else {
          destination = "Seattle";
        }
        break;
    default:
        alert('nothing happened?');
  }
}

var currentQuestionLoader = function(whichQuestion) {
  storesAnswer = null;//resets
  $('#questionbar').html("<h1>"+whichQuestion.question+"</h1>");
  $('#affirmativeresponse').html("<h2>"+whichQuestion.affirmative+"</h2>");
  $('#negativeresponse').html("<h2>"+whichQuestion.negative+"</h2>");
}

var runQuiz = function() {
  currentQuestionLoader(hipsterQuestion);
  $('.answering').click(function() {
    if ($(this).attr('id') === "affirmativeresponse") {
      alert('working');
    } else {
      alert('also working');
    }
  });

}


////beginning
$(document).ready(function(){
    $('#questionbar').click(function() {
      runQuiz();
    });
});





  // if (!canPedalUphill) {
  //
  // }
