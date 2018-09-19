var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var footballState = new ClozeCard ("7 points is awarded for a touchdown in football", "7 points");

var soccerState = new ClozeCard("During a soccer game there are 11 players on the field", "11 players");

var distanceState = new ClozeCard("Israel is 6,744 mi from the United States", "6,744 mi");

var movieState = new ClozeCard("The movie E.T was released on June 11, 1982", "June 11, 1982")

var appleState = new ClozeCard("the Apple iPhone was first released on June 29, 2007", "June 29, 2007")


var newZeland = new BasicCard("How long is New Zealand's Ninety Mile Beach?", "55 miles");

var minnesota = new BasicCard("In Minnesota it is illegal to tease what type of animal?", "Skunk");

var JeffBezos = new BasicCard("How old was jeff bezos when he started amazon?", "30");

var VScode = new BasicCard("Who was Visual Studio Code(VS Code) developed by?", "Microsoft");

var Matrix = new BasicCard("Who produced The Matrix", "Joel Silver");
