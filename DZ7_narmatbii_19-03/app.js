

var computerSelect = Math.random();
class Game{
  constructor(player,computerSelect){
    this.PlayerChoice = player,
    this.ComputerChoice=computerSelect
    this.winnerScore = [0, 0]
  }

  get getComputerSelect(){
    if (this.ComputerChoice < 0.34) {
      return this.computerSelect = "Камень";
    } else if (this.ComputerChoice <= 0.67) {
     return this.computerSelect = "Бумага";
    } else {
     return this.computerSelect = "Ножницы";
    }
  }

  get Getw(){
    if (this.PlayerChoice === "Камень" && this.computerSelect === "Бумага" || 
  this.PlayerChoice === 'Бумага' && this.computerSelect === 'Ножницы' || 
  this.PlayerChoice === 'Ножницы' && this.computerSelect === 'Камень') {
    return this.getwinner="Компьютер";
  }

  if (this.PlayerChoice === "Ножницы" && this.computerSelect === "Бумага" || 
this.PlayerChoice ==="Камень" && this.computerSelect === "Ножницы" ||
  this.PlayerChoice ==="Бумага" && this.computerSelect ==="Камень") {
    return this.getwinner="Игрок";
  } 

  if  (this.PlayerChoice === 'Ножницы'&& this.computerSelect ==="Ножницы" ||
  this.PlayerChoice === 'Камень' && this.computerSelect === 'Камень' ||
  this.PlayerChoice === 'Бумага' && this.computerSelect === 'Бумага'){
   return this.getwinner='Ничья';
  } 
}
  get winnerS(){
    if (this.getwinner === "Игрок") {
     return this.winnerScore[0]=+1;
    }
    if (this.getwinner === "Компьютер") {
      return this.winnerScore[1]=+1;
    }
  }
  }

function startGame(){
  const game = new Game(prompt(),Math.random())
  alert(game.getComputerSelect)
  alert(game.Getw)
  alert(game.winnerS)
}
