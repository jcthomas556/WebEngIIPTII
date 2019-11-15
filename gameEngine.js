
function playGame(req, res){
    var object = req.query.player_choice;
    var weight = req.query.username;
   
    var cost = calculateCost(object, weight);
    var costReport = {cost: cost}; // send it in a JSON object
    res.render('results', costReport);


    // var cpu = getCpuChoice();
    // var winner = getWinner(player, cpu, username);
    // var stuff = {player: player, cpu: cpu, winner: winner};
    // res.render('results', stuff);
}


function calculateCost(object, weight){
    console.log(object);
    console.log(weight);
    if (weight < 0 || weight > 13) weight = 0
    if (weight == 0) return 0
    if (object == "stampedLetter") { // Stamped
        if (weight < 1) return 0.55
        if (weight < 2) return 0.7
        if (weight < 3) return 0.85
        if (weight < 3.5) return 1
    } if (object == "meteredLetter") { // Metered
        if (weight < 1) return 0.5
        if (weight < 2) return 0.65
        if (weight < 3) return 0.8
        if (weight < 3.5) return 0.95
    } if (object == "flatEnvelope") { // Flat
        if (weight < 1) return 1
        if (weight < 2) return 1.15
        if (weight < 3) return 1.3 
    } if (object == "package") { // Package
        if (weight < 4) return 3.66
        if (weight < 8) return 4.39
        if (weight < 12) return 5.19
        if (weight <= 13) return 5.71
    }

}





module.exports = {playGame: playGame};


// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }


// function getWinner(player, cpu, username){
//     var winner;

//     if(player == cpu){
//         winner = "tie";
//     }
//     else if((player == "rock" && cpu == "sissors") || (player == "scissors" && cpu == "paper") || (player == "paper" && cpu == "rock")){
//         winner = username;
//     }
//     else{
//         winner = "cpu";
//     }
//     return winner;
// }


// function getCpuChoice(){
//     var num = getRandomInt(0, 2);
//     switch (num) {
//         case 0: 
//             return "rock";
//         case 1:
//             return "paper";
//         default:
//             return "scissors";
//     }
// }
