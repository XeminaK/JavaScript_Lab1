let game = prompt("Would you like to play a game?")
let win = 0;
let nameHP = 40;
let GrantHP = 10;
if (game === "yes") {
    let name = prompt("What is your name?");
    //the main win condition is win the user has 3 wins
    while (nameHP >=0 && GrantHP > 0) {
    console.log(`${name} has ${nameHP} and Grant has ${GrantHP} left`)
    //check the players HP
        if (nameHP >= 1) {
        //take away health from both grant and name
        nameHP -= Math.floor(Math.random()*2) +1;
        GrantHP -= Math.floor(Math.random()*2) +1;
        //check Grants HP
            if(GrantHP <= 0 && win === 2) {
            //grants hp is zero and you have 2 wins, therefore you win
            console.log("You win");
            //if grants HP is set to zero, but you dont have
            //two wins, then you need to set it to zero
            //and increase your wins
            } else if (GrantHP <=0) {
            console.log("You Win");
            GrantHP = 10;
            win++;
        }
        //playes hp runs to 0, you lost the game
    }   else  if  (nameHP >= 0) {
            console.log("You lost the game")
            break;
    }
}

} else {
  console.log("We can play another time");
}