//display a message "You are eligible for a free delivery" when the cart total is greater than 500>
// the number of items are more than 5, if not then just print "You are not eligible for a free delivery"

function total(cartTotal, numItem) {
  if (cartTotal > 500 && numItem > 5) {
    console.log("You are eligible for a free delivery");
  } else {
    console.log("You are not eligible for a free delivery");
  }
}
var cartTotal = 501;
var numItem = 6;
total(cartTotal,numItem);
