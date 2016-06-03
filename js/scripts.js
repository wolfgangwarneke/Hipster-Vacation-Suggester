var isHipster = true;
var likesStarbucks = true;
var networks = true;
var cantEven = true;
var likesToRide = true;
var canPedalUphill = true;
var justBeer = true;
var knowsHuxley = true;

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







  // if (!canPedalUphill) {
  //
  // }
