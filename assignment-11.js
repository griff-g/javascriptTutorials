var animal = "lion";

switch (animal) {
  case "cat":
  case "dog":
  case "fish":
    console.log("this is a pet animal");
    break;

  case "rhino":
  case "tiger":
    console.log("this is a zoo animal");
    break;

  case "bear":
  case "fox":
    console.log("this is a wild animal");
    break;

  default:
    console.log("no category selected");
    break;
}
