let board = [ " ", " ", " ", " ", " ", " ", " ", " ", " " ]

let boxzero = document.getElementById("boxzero");
let boxone = document.getElementById("boxone");
let boxtwo = document.getElementById("boxtwo");
let boxthree = document.getElementById("boxthree");
let boxfour = document.getElementById("boxfour");
let boxfive = document.getElementById("boxfive");
let boxsix = document.getElementById("boxsix");
let boxseven = document.getElementById("boxseven");
let boxeight = document.getElementById("boxeight");
let addSum = document.getElementById("add-sum");
let toggle = document.getElementById("toggleh");


boxzero.addEventListener("input", add0);
boxone.addEventListener("input", add1);
boxtwo.addEventListener("input", add2);
boxthree.addEventListener("input", add3);
boxfour.addEventListener("input", add4);
boxfive.addEventListener("input", add5);
boxsix.addEventListener("input", add6);
boxseven.addEventListener("input", add7);
boxeight.addEventListener("input", add8);

let togglex = false;
let counter = 0;

function toggleXO() {
  if (togglex == true) {
    toggle.innerHTML = "Click on a number/space and enter your move X.";
    togglex = false;
  } else {
    toggle.innerHTML = "Click on a number/space and enter your move O.";
    togglex = true;
  }
}

function counterPop() {
  if (counter == 9) {
    alert("Game Over. Refresh to Play Again!");
  }
}


function add0() {
    let zero = boxzero.value.toUpperCase() || " ";
    board.splice(0, 1, zero);
    //addSum.innerHTML = "Your move is:" + zero + "and your data collection is:" + board;
    winner(board);
    toggleXO();
    counter ++;
    counterPop();
}

function add1() {
    let one = boxone.value.toUpperCase() || " ";
    board.splice(1, 1, one);
    //addSum.innerHTML = "Your move is:" + one + "and your data collection is:" + board;
    winner(board);
    toggleXO();
    counter ++;
    counterPop();
}

function add2() {
    let two = boxtwo.value.toUpperCase() || " ";
    board.splice(2, 1, two);
    //addSum.innerHTML = "Your move is:" + two + "and your data collection is:" + board;
    winner(board);
    toggleXO();
    counter ++;
    counterPop();
}

function add3() {
    let three = boxthree.value.toUpperCase() || " ";
    board.splice(3, 1, three);
    //addSum.innerHTML = "Your move is:" + three + "and your data collection is:" + board;
    winner(board);
    toggleXO();
    counter ++;
    counterPop();
}

function add4() {
    let four = boxfour.value.toUpperCase() || " ";
    board.splice(4, 1, four);
    //addSum.innerHTML = "Your move is:" + four + "and your data collection is:" + board;
    winner(board);
    toggleXO();
    counter ++;
    counterPop();
}

function add5() {
    let five = boxfive.value.toUpperCase() || " ";
    board.splice(5, 1, five);
    //addSum.innerHTML = "Your move is:" + five + "and your data collection is:" + board;
    winner(board);
    toggleXO();
    counter ++;
    counterPop();
}

function add6() {
    let six = boxsix.value.toUpperCase() || " ";
    board.splice(6, 1, six);
    //addSum.innerHTML = "Your move is:" + six + "and your data collection is:" + board;
    winner(board);
    toggleXO();
    counter ++;
    counterPop();
}

function add7() {
    let seven = boxseven.value.toUpperCase() || " ";
    board.splice(7, 1, seven);
    //addSum.innerHTML = "Your move is:" + seven + "and your data collection is:" + board;
    winner(board);
    toggleXO();
    counter ++;
    counterPop();
}

function add8() {
    let eight = boxeight.value.toUpperCase() || " ";
    board.splice(8, 1, eight);
    //addSum.innerHTML = "Your move is:" + eight + "and your data collection is:" + board;
    winner(board);
    toggleXO();
    counter ++;
    counterPop();
}

function winner(board) {
  if (board[0]=="X" && board[1]=="X" && board[2]=="X" || board[0]=="X" && board[3]=="X" && board[6]=="X") {
      alert("X wins!!");
  } else if (board[3]=="X" && board[4]=="X" && board[5]=="X" || board[1]=="X" && board[4]=="X" && board[7]=="X") {
      alert("X wins!!");
  } else if (board[6]=="X" && board[7]=="X" && board[8]=="X" || board[2]=="X" && board[5]=="X" && board[8]=="X") {
      alert("X wins!!");
  } else if (board[0]=="O" && board[1]=="O" && board[2]=="O" || board[0]=="O" && board[3]=="O" && board[6]=="O") {
      alert("O wins!!");
  } else if (board[3]=="O" && board[4]=="O" && board[5]=="O" || board[1]=="O" && board[4]=="O" && board[7]=="O") {
      alert("O wins!!");
  } else if (board[6]=="O" && board[7]=="O" && board[8]=="O" || board[2]=="O" && board[5]=="O" && board[8]=="O") {
      alert("O wins!!");
  } else if (board[2]=="X" && board[4]=="X" && board[6]=="X" || board[0]=="X" && board[4]=="X" && board[8]=="X") {
      alert("X wins!!");
  } else if (board[2]=="O" && board[4]=="O" && board[6]=="O" || board[0]=="O" && board[4]=="O" && board[8]=="O") {
    alert("O wins!!");
  } else {

  }

}
