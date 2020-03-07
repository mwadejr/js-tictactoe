var board
const human = "O";
const ai = "X";
var track = human;
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

//startGame = () => {
function startGame() {
    document.querySelector(".endgame").getElementsByClassName.display = "none";
    board = Array.from(Array(9).keys());
    //console.log (board);
    //console.log (cells);
    for(let i=0; i<cells.length;i++){
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);  
    }
}

function turnClick(square) {
//console.log(square.target.id);
turn(square.target.id, track)
}

function turn(squareID, player){
if(board[squareID] === human || board[squareID] === ai)
return;    
board[squareID] = player;
document.getElementById(squareID).innerText = player;
if(track === human)
track = ai;
else
track = human;

}