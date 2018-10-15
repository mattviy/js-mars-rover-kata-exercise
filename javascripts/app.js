// Rover Object Goes Here
// ======================

// ======================
var myRover = {
  xPosition: 0,
  yPosition: 0,
  direction: 'N',
  travelLog: []
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
  rover.travelLog.push(rover.xPosition + "," + rover.yPosition);
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

function commands(rover, input){
  for (var i = 0; i < input.length; i++){
    switch(input[i]){
      case 'f':
      moveForward(rover);
      console.log(rover.yPosition + ", " + rover.xPosition);
      break; 
      case 'r':
      turnRight(rover);
      console.log("rover turned right");
      break;
      case 'l':
      turnLeft(rover);
      console.log("rover turned left");
      break;
    }
  }
}
//myRover is driving a square around the border of the grid :)
commands(myRover,"llfffflfffflfffflfffff");
console.log(myRover.travelLog);