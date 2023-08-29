import knightsTravails from "./knight-travails.js";

// Test Cases

knightsTravails([0, 0], [1, 2]);
// The shortest path was 1 moves!
// The moves were:
// 0, 0
// 1, 2

knightsTravails([3, 3], [7, 6]);
// The shortest path was 3 moves!
// The moves were:
// 3, 3
// 5, 2
// 6, 4
// 7, 6

knightsTravails([0, 0], [7, 7]);
// The shortest path was 6 moves!
// The moves were:
// 0, 0
// 2, 1
// 4, 2
// 6, 1
// 7, 3
// 6, 5
// 7, 7
