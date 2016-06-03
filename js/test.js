var isHipster;
var likesStarbucks;
var networks;
var cantEven;
var likesToRide;
var canPedalUphill;
var justBeer;
var knowsHuxley;
var forSwitch = [isHipster, likesStarbucks, networks, cantEven, likesToRide, canPedalUphill, justBeer, knowsHuxley];

var storesAnswer;
var caseNumber;

var destination;
var getDestination = function(foo) {
  switch (foo) {
    case 0:
        if (isHipster || likesStarbucks) {
          destination = "Seattle";
          alert(destination);
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
        console.log('no destination yet');
  }
}

var currentQuestionLoader = function(whichQuestion) {
  storesAnswer = null;//resets
  $('#questionbar').html("<h1>"+whichQuestion.question+"</h1>");
  $('#affirmativeresponse').html("<h2>"+whichQuestion.affirmative+"</h2>");
  $('#negativeresponse').html("<h2>"+whichQuestion.negative+"</h2>");
  caseNumber = whichQuestion.cases;
}
var answerProtocol = function(whichQuestion) {
  $('.answering').click(function() {
    if ($(this).attr('id') === "affirmativeresponse") {
      storesAnswer = true;
    } else {
      storesAnswer = false;
    }
    whichQuestion.varIndex = storesAnswer;
    console.log(storesAnswer);//delete this later
    console.log(whichQuestion.varIndex);
    getDestination(caseNumber);
    if ( typeof destination === "string") {
      alert(destination);
    }
  });
}

var runQuiz = function() {
  currentQuestionLoader(hipsterQuestion);
  answerProtocol(hipsterQuestion);



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
