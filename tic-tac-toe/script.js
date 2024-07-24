const boxes=document.querySelectorAll(".box");
// it store all 9 box array like structure
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");



let currentPlayer;
let gameGrid;   //array for our referance to know game status

const winningPosition=[     //based on index of box
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


// lets create a func to initilize the game
function initGame(){
    currentPlayer='X';
    gameGrid=["","","","","","","","","",];
    // for our understanding for game status
    // as initially the grid is empty

    // to empty boxes on UI
    boxes.forEach((box,index) => {
        box.innerText="";

        boxes[index].style.pointerEvents="all";
        // missing i.e initiliae box with their default css properties again
        // we got to know this while testing

        box.classList=`box box${index+1}`;
        // because each box orignally belong to class of box and box1 and so inorder to remove green bg-color from winner boxes


        // **not working
        // box.classList.remove="win";
    });

    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}

// at starting call
initGame();



function handleClick(index){
    if(gameGrid[index]===""){ //if it is empty at that index i.e neither X nor O  this also made unclickable to already occupied position

        boxes[index].innerText = currentPlayer;
        //it will reflect on UI
        gameGrid[index] = currentPlayer;
        // it will update in gamegrid array for our referance of game status

        boxes[index].style.pointerEvents="none";
        // means one the box get a value then our it will not resspond to click event

        swapTurn();
        // then
        //check koi jeet toe nhi gaya
        checkGameOver();
    }
}


function swapTurn(){
    if(currentPlayer==="X")
        currentPlayer="O";
    else{
        currentPlayer="X";
    }

    // UI update
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}



function checkGameOver(){
    let ans="";


    winningPosition.forEach((index) => {
        // all 3 boxes should non-empty and exactly same i.e either X or O
        if((gameGrid[index[0]]!=="" || gameGrid[index[1]]!=="" || gameGrid[index[2]]!=="") && (gameGrid[index[0]]===gameGrid[index[1]]) && (gameGrid[index[1]]===gameGrid[index[2]])){
              // check if winner is X
            if(gameGrid[index[0]]==="X")
                ans="X";
            else{
                ans="O";            
            }


            // disable pointer event i.e click event as now game is over as we
            boxes.forEach((box) =>{
                box.style.pointerEvents="none";
            })



            // now we know X/O is a winner so a green bg color to that 3 boxes
            boxes[index[0]].classList.add("win");
            boxes[index[1]].classList.add("win");
            boxes[index[2]].classList.add("win");
        }
    });

    
    // means we have winner
    if(ans!==""){
        gameInfo.innerText=`Winner Player - ${ans}`;
        newGameBtn.classList.add("active");
        return;
        // next sectoin will not be execuited
    }


    //** */ we reached to this line if no winner is got because if winner is caught the see line 111 i.e(return;)

    // when there is no winner i.e tie
    let fillCount=0;
    boxes.forEach((box) =>{
        if(box.innerText!==""){
            fillCount++;
        }
    });

    // now if board is filled , game is tie
    if(fillCount===9){
        gameInfo.innerText="Game Tied!";
        newGameBtn.classList.add("active");
    }

}






// for each loop
boxes.forEach((box,index)=>{//box represent each element
    box.addEventListener("click",()=>{ //we donot use event target as then we will not aware of the index
      handleClick(index);
    //   to know which box is clicked
    })
});




newGameBtn.addEventListener("click",()=>{
    initGame();
});
