 let boxes = document.querySelectorAll(".bos");
 let resetBtn = document.querySelector("#reset");
 let newGameBtn = document.querySelector("#new-btn");
 let msg = document.querySelector("#msg");
 let msgContainer = document.querySelector(".msg-container");

 let turnX = true ;
 let count = 0;
 const winPatterns = [
    [0 , 1 , 2],
    [0 , 4 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],
 ];

 boxes.forEach ((bos) => {
    bos.addEventListener("click" , () => {
        // console.log("Bos was clicked");
        if ( turnX === true){
            bos.innerText = "X";
            turnX = false
        } else {
            bos.innerText = "O"
            turnX = true
        }
        bos.disabled = true ;
        count++ ;

        let isWinner = checkWinner();
        if ( count === 9 && !isWinner){
            showDraw();
        }
    })
 });

const disableBtn = () => {
    for ( let bos of boxes){
        bos.disabled = true ;
    }
}

const enableBtn = () => {
    for ( let bos of boxes){
        bos.disabled = false ;
        bos.innerText = "" ;
    }
}

const resetGame = () => {
    turnX = true;
    count = 0;
    enableBtn();
    msgContainer.classList.add("hide");
}

 const checkWinner = () => {
    let winnerFound = false ;
    for (let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText ;
        let posVal2 = boxes[pattern[1]].innerText ;
        let posVal3 = boxes[pattern[2]].innerText ;

        if ( posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if ( posVal1 === posVal2 && posVal2 === posVal3) {
                console.log("Winner" , posVal1)
                showWinner(posVal1)
                return true;
            }
        }
    }
 };


//  const checkDraw = () => {
//     let allFilled = true;
//     for (let bos of boxes) {
//         if (bos.innerText === "") {
//             allFilled = false;
//             break;
//         }
//     }
//     if (allFilled) {
//         showDraw();
//         disableBtn();
//     }
// };



const showDraw = () => {
    msg.innerText = `It's a draw!`;
    msgContainer.classList.remove ("hide");
    disableBtn();

};

 const showWinner = (Winner) => {
    msg.innerText = `Congratulations , Winner is ${Winner}`;
    msgContainer.classList.remove ("hide");
    disableBtn();

 };
newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);