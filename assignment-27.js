//Create a function that finds the maximum range of a triangle's third edge,
//where the side lengths are all integers.

//(side1 + side2) - 1 = maximum range of third edge.

function nextEdge(side1, side2) {
    if (side1 > 0 && side2 > 0) {
        return (side1 + side2) - 1
    } else {
        return -1;
    }
}

console.log(nextEdge(8, 10));

//Answer = 17
