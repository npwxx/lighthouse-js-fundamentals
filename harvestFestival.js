const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  let coordinates = [0, 0];
  for (let dir of moves) {
    switch(dir){
      case "north":
        coordinates[1] += 1;
        break;
      case "south":
        coordinates[1] -= 1;
        break;
      case "west":
        coordinates[0] -= 1;
        break;
      case "east":
        coordinates[0] += 1;
        break;
    }
  } return coordinates;
}
console.log(finalPosition(moves))