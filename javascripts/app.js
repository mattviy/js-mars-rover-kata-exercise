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
      if (rover.yPosition == 0){
        console.log("Rover reached the boundary, can't move forward.");
      } else {
        rover.yPosition--;
      }
      break;
    case 'E':
      if (rover.xPosition == 4){
        console.log("Rover reached the boundary, can't move forward.");
      } else { 
        rover.xPosition++;
      }
      break;
    case 'S':
      if (rover.yPosition == 4){
        console.log("Rover reached the boundary, can't move forward.");
      } else {
        rover.yPosition++;
      }
      break;
    case 'W':
    if (rover.xPosition == 0){
      console.log("Rover reached the boundary, can't move forward.");
    } else {
      rover.xPosition--;
    }
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