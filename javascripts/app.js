// Rover Object Goes Here
// ======================

// ======================
var myRover = {
  direction: 'N'
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
      
      break;
    case 'E':
      
      break;
    case 'S':
      
      break;
    case 'W':
      
      break;
  }
}

turnRight(myRover);
console.log(myRover.direction);



