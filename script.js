var board;
var count = 0;
const human = "O";
const ai = "X";
var track = human;
var ran = 0;
var tie = false
var num = 0;
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

const cells = document.querySelectorAll('.cell');
startGame();
//console.log(emptySquares()[0])
//startGame = () => {
function startGame() {
    tie=false;

    //document.querySelector(".endgame").getElementsByClassName.display = "none";
    document.querySelector(".endgame").style.display = "none";
    board = Array.from(Array(9).keys());
    //console.log(cells.length);
    console.log (board);
    //console.log (cells);
    for(var i=0; i<cells.length;i++){
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);  
    }
}

function turnClick(square) {
//console.log(square.target.id);
if(typeof board[square.target.id] =='number'){

turn(square.target.id, human)
console.log(aiChoice())
if(!aiTurn())
turn(aiChoice(), ai);
}
}

function turn(squareID, player){
if(board[squareID] === human || board[squareID] === ai)
return;    
board[squareID] = player;
document.getElementById(squareID).innerText = player;
cells[squareID].removeEventListener('click', turnClick, false);
//checkWin(human);
if(checkTie())
declareWinner("Its a Tie");
}

function aiTurn() {
    ran = Math.round(Math.random() * 8)
    if(board[ran] !== human && board[ran] !== ai){
        board[ran] = ai;
        document.getElementById(ran).innerText = ai;
        return true;
      }
      ran = Math.round(Math.random() * 8)
      if(board[ran] !== human && board[ran] !== ai){
          board[ran] = ai;
          document.getElementById(ran).innerText = ai;
          return true;
        }
        ran = Math.round(Math.random() * 8)
      if(board[ran] !== human && board[ran] !== ai){
          board[ran] = ai;
          document.getElementById(ran).innerText = ai;
          return true;
        }
        ran = Math.round(Math.random() * 8)
      if(board[ran] !== human && board[ran] !== ai){
          board[ran] = ai;
          document.getElementById(ran).innerText = ai;
          return true;
        }
      return false;
       // stop =true;
    
    
    //ran=8;
    //while(stop === false)
   // console.log(ran);
    //if(board[ran] !== human && board[ran] !== ai){
    //board[ran] = ai;
   // document.getElementById(ran).innerText = ai;
   // count++;  
  //  stop = true;
  //  }else
 //   ran--;  
}

function emptySquares() {
    return board.filter(s => typeof s == 'number')
}

function aiChoice() {
    return emptySquares()[0];
}

function checkTie() {
    if(emptySquares().length === 0){
    return true;   
    }else
    return false;
    }


function checkWin(player) {
    if((board[0] === player && board[1] === player && board[2] === player))
    for (i=0;i<3;i++)
    document.getElementById(i).style.backgroundColor(rgba(0,0,0,.2));
       /* (board[3] === player && board[4] === player && board[5] === player) || 
        (board[6] === player && board[7] === player && board[8] === player) || 
        (board[0] === player && board[3] === player && board[6] === player) || 
        (board[1] === player && board[4] === player && board[7] === player) || 
        (board[2] === player && board[5] === player && board[8] === player) || 
        (board[0] === player && board[4] === player && board[8] === player) || 
        (board[6] === player && board[4] === player && board[2] === player) ||*/ 
     
}


function declareWinner(who) {
    for(i=0;i<cells.length;i++){
        cells[i].style.backgroundColor = "green";
        cells[i].removeEventListener('click', turnClick, false);
      } 
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}
/*
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]*/