var inquirer = require("inquirer")
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var i = 0;

var basicArr = [

    new BasicCard("How long is New Zealand's Ninety Mile Beach?", "55 miles"),

    new BasicCard("In Minnesota it is illegal to tease what type of animal?", "Skunk"),

    new BasicCard("How old was jeff bezos when he started amazon?", "30"),

    new BasicCard("Who was Visual Studio Code(VS Code) developed by?", "Microsoft"),

    new BasicCard("Who produced The Matrix", "Joel Silver")]


var clozeArr = [

    new ClozeCard("7 points is awarded for a touchdown in football", "7 points"),

    new ClozeCard("During a soccer game there are 11 players on the field", "11 players"),

    new ClozeCard("Israel is 6,744 mi from the United States", "6,744 mi"),

    new ClozeCard("The movie E.T was released on June 11, 1982", "June 11, 1982"),

    new ClozeCard("The Apple iPhone was first released on June 29, 2007", "June 29, 2007")
]

function Arr1() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: basicArr[i].front,
        },
    ]).then(data => {
        if (data.name === basicArr[i].back) {
            console.log("Correct!");
        }
        else {
            console.log("Sorry, wrong answer.")
            console.log("Answer: " + basicArr[i].back)
        }
        i++;
        if (i < basicArr.length) {
            Arr1();
        }
        else {
            i = 0;
            Arr2();
        }
    })
} Arr1();

function Arr2() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: clozeArr[i].partial,
        },
    ]).then(data => {
        if (data.name === clozeArr[i].cloze) {
            console.log("Correct!");
        }
        else {
            console.log("Wrong!");
            console.log("Answer: " + clozeArr[i].fullText);
        }

        i++;
        if (i < clozeArr.length) {
            Arr2();
        }
        else {
            console.log("Thanks for playing!")
        }
    })
} 