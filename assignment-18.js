function carSelect(rank) {
  switch (rank) {
    case 1:
      console.log("Mercedes is rank 1");
      break;

    case 2:
      console.log("BMW is rank 2");
      break;

    case 3:
      console.log("Tesla is rank 3");
      break;

    case 4:
      console.log("Cadillac is rank 4");
      break;

    case 5:
      console.log("Ferrari is rank 5");
      break;

    default:
      console.log("no brand");
      break;
  }
}
var rank = 2;
carSelect(rank);
