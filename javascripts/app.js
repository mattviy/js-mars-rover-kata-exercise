// Rover Object Goes Here
// ======================

// ======================
var myRover = {
  xPosition: 0,
  yPosition: 0,
  direction: 'S'
};

function turnLeft(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = "W";
      break;
  case 'E':
      rover.direction = "N";
      break;
  case 'S':
      rover.direction = "E";
      break;
  case 'W':
      rover.direction = "S";
      break;
  }
}

function turnRight(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = "E";
      break;
  case 'E':
      rover.direction = "S";
      break;
  case 'S':
      rover.direction = "W";
      break;
  case 'W':
      rover.direction = "N";
      break;
  }
}

function moveForward(rover){
  switch(rover.direction){
    case 'N':
      rover.yPosition--;
      break;
    case 'E':
      rover.xPosition++;
      break;
    case 'S':
      rover.yPosition++;
      break;
    case 'W':
      rover.xPosition--;
      break;
  }
}

moveForward(myRover);
console.log(myRover.yPosition + ", " +myRover.xPosition);



