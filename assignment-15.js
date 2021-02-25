//Instructions: You have 3 items
// item1 is a ball
//item2 is a basket
// item3 is a fish tank
// bluedart,UPS, FEDEX

var item = "ball";
var carrier = "bluedart";
if (item === "ball" && carrier === "bluedart") {
  console.log("it will be delivered to India");
} else if (item === "basket" && carrier === "UPS") {
  console.log("it will be delivered with UPS to USA");
} else if (item === "fish tank" && carrier === "FEDEX") {
  console.log("it will be delivered to Canada");
} else {
  console.log("no carrier or item exist");
}
