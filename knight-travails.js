// class for a single square, with its position in x and y.
class ChessSquare {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.predecessor = null;
  }

  getPredecessor() {
    return this.predecessor;
  }

  setPredecessor(newPred) {
    this.predecessor = newPred;
  }

  name() {
    return `${this.xPos}, ${this.yPos}`;
  }

  // creates a square for every possible movement from the current position.
  createKnightMoves() {
    return this.KNIGHT_OFFSETS.map((coords) =>
      this.newSquareFrom(coords)
    ).filter(Boolean);
  }

  // creates a new square from the current position to the offset coords input.
  newSquareFrom([xOffset, yOffset]) {
    const [newX, newY] = [this.xPos + xOffset, this.yPos + yOffset];
    if (newX >= 0 && newX < 8 && 0 <= newY && newY < 8) {
      let newSquare = new ChessSquare(newX, newY);
      return newSquare;
    }
  }
}

// every possible movement of the knight.
ChessSquare.prototype.KNIGHT_OFFSETS = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];

function knightsTravails(start, finish) {
  // creates origin square and target square objects
  const origin = new ChessSquare(...start);
  const target = new ChessSquare(...finish);

  const queue = [target]; 
  // from target creates every possible route, if any route is the same as the origin stop the loop.
  while (!queue.some((square) => square.name() == origin.name())) {
    // Using FIFO queue
    const currentSquare = queue.shift();
    if (currentSquare) {
      // for the current position creates every possible moove.
      const enqueueList = currentSquare.createKnightMoves();
      // set current position as predecessor for created possible moves.
      enqueueList.forEach((square) => square.setPredecessor(currentSquare));
      // push every new possible move to the queue.
      queue.push(...enqueueList);
    }
  }

  // gets last path off while loop, where the current square was equal to target square.
  const foudPath = queue.pop();
  // initialize the path whit the origin square.
  const path = [origin];
  // set up a variable to access nested predecessors
  let nextSquare = foudPath;
  while (!path.some((square) => square.name() == target.name())) {
    // set next square to the predecessor, and then add it to the path.
    nextSquare = nextSquare.getPredecessor();
    path.push(nextSquare);
  }
  // log results.
  console.log(`The shortest path was ${path.length - 1} moves!`);
  console.log("The moves were:");
  path.forEach((square) => console.log(square.name()));
}

export default knightsTravails;
