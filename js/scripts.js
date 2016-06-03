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
var beginFlag = false;
var conditionalsTester;

var destination;
var getDestination = function(foo) {
  switch (foo) {
    case 0:
        if (storesAnswer) {
          destination = "Seattle";
        }
        break;
    case 1:
          if (storesAnswer) {
            destination = "Los Angeles";
          } else {
            destination = "Brooklyn";
          }
          break;
    case 2:
        if (!storesAnswer) {
          destination = "Brooklyn";
        }
        break;
// if (!canPedalUphill) exists elsewhere
    case 3:
        if (storesAnswer) {
          destination = "Portland";
        } else {
          destination = "Austin";
        }
        break;
    case 4:
        if (storesAnswer) {
          destination = "San Fransisco";
        } else {
          destination = "Seattle";
        }
        break;
    case 5:
        conditionalsTester = storesAnswer;
  }
}

var nextClear = function() {
  $('#questionbar').empty();
  $('#affirmativeresponse').empty();
  $('#negativeresponse').empty();
}

var currentQuestionLoader = function(whichQuestion) {
  storesAnswer = null;//resets
  $('#questionbar').html("<h1>"+whichQuestion.question+"</h1>");
  $('#affirmativeresponse').html("<h2>"+whichQuestion.affirmative+"</h2>");
  $('#negativeresponse').html("<h2>"+whichQuestion.negative+"</h2>");
  caseNumber = whichQuestion.cases;
}
var answerProtocol = function(whichQuestion) {
  $('.answering').on("click", function() {
    if ($(this).attr('id') === "affirmativeresponse") {
      storesAnswer = true;
    } else {
      storesAnswer = false;
    }
    getDestination(caseNumber);
    if ( typeof destination === "string") {
      alert(destination);//will go to ending string
    } else {
      nextClear();
      beginFlag = true;
    }
    $('.answering').off("click");
  });
}



///begin TEST
////beginning
$(document).ready(function(){
  $('#questionbar').one("click", function() {
    currentQuestionLoader(hipsterQuestion);
    answerProtocol(hipsterQuestion);
    $('#questionbar').one("click", function() {
      currentQuestionLoader(starbucksQuestion);
      answerProtocol(starbucksQuestion);
      $('#questionbar').one("click", function() {
        currentQuestionLoader(networkingQuestion);
        answerProtocol(networkingQuestion);
        if (storesAnswer) {
          alert('success!');
          $('#questionbar').one("click", function() {
            currentQuestionLoader(cantEvenQuestion);
            answerProtocol(cantEvenQuestion);
          });
        } else if (!storesAnswer) {
          $('#questionbar').one("click", function() {
            currentQuestionLoader(bicycleQuestion);
            answerProtocol(bicycleQuestion);
            $('#questionbar').one("click", function() {
              currentQuestionLoader(uphillQuestion);
              answerProtocol(uphillQuestion);
              if (storesAnswer) {
                $('#questionbar').one("click", function() {
                  currentQuestionLoader(huxleyQuestion);
                  answerProtocol(huxleyQuestion);
                });
              } else if (!storesAnswer) {
                $('#questionbar').one("click", function() {
                  currentQuestionLoader(beerQuestion);
                  answerProtocol(beerQuestion);
                });
              }
            });
          });
        }
      });
    });
  });
});
