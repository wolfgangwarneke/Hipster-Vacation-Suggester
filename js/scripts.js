var storesAnswer;
var caseNumber;
var conditionalsTester;
var abrv;

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

var result;
var imgpath;
var findCityData = function(city) {
  var city = city;
  if (city === "Austin") {
    result = "ATX";
    imgpath = "img/atx.jpg";
  } else if (city === "Brooklyn") {
    result = "BKLYN";
    imgpath = "img/bklyn.jpg";
  } else if (city === "Los Angeles") {
    result = "LAX";
    imgpath = "img/lax.jpg";
  } else if (city === "Portland") {
    result = "PDX";
    imgpath = "img/pdx.jpg";
  } else if (city === "San Fransisco") {
    result = "SFO";
    imgpath = "img/sfo.jpg";
  } else {
    result = "SEA";
    imgpath = "img/sea.jpg";
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
  $('.answering').on("click", function() {
    if ($(this).attr('id') === "affirmativeresponse") {
      storesAnswer = true;
    } else {
      storesAnswer = false;
    }
    getDestination(caseNumber);
    if ( typeof destination === "string") {
      $('.quiz, #result').toggleClass("hidden");
      //beginning of destination page content
      if (userName) {
        $('.username').text(userName.toUpperCase());
      } else {
        $('.username').text('BROSEF');
      }
      findCityData(destination);
      $('#result').append("<h1 id='abbreviation'>"+ result +"</h1>");
      $('#result').append("<h2>is where you wanna go</h2><h1>VACAY!</h1>");
      $('*').css("background", "none").css({
          "color" : "#ffdddd",
          "text-shadow" : "2px 2px 5px #000"
      });
      $('html').css("background", "url('" + imgpath + "') no-repeat center center fixed").css("background-size", "cover");
      //end of destination page content
    } else {
      nextClear();
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
        $('#questionbar').one("click", function() {
          if (storesAnswer) {
            currentQuestionLoader(cantEvenQuestion);
            answerProtocol(cantEvenQuestion);
          } else if (!storesAnswer) {
            currentQuestionLoader(bicycleQuestion);
            answerProtocol(bicycleQuestion);
            $('#questionbar').one("click", function() {
              currentQuestionLoader(uphillQuestion);
              answerProtocol(uphillQuestion);
              $('#questionbar').one("click", function() {
                if (storesAnswer) {
                  currentQuestionLoader(huxleyQuestion);
                  answerProtocol(huxleyQuestion);
                } else if (!storesAnswer) {
                  currentQuestionLoader(beerQuestion);
                  answerProtocol(beerQuestion);
                }
              });
            });
          }
        });
      });
    });
  });
});
