 let boxes = document.querySelectorAll(".box");
 let reset = document.querySelector(".reset");
 let win = document.querySelector(".winner");
 let hide = document.querySelector(".hide");

 let turnO = true;

 let winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//console.log(arr2)
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        // console.log("box was clicked");
        if (turnO) {
            box.innerText="O";
            console.log(box)
            turnO = false;
            box.classList.add("ox");
            
        }else {
            box.innerText ="X";
            turnO = true; 
        }
        box.disabled = true;
        checkWinner();
    });
    
});
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner =  (val) => {
    win.innerText=`winner is ${val}`;
    win.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for (let winner of winners) {
        let pos1 = boxes[winner[0]].innerText;
        let pos2 = boxes[winner[1]].innerText;
        let pos3 = boxes[winner[2]].innerText;  
        
        if (pos1 != "" && pos2 != "" && pos3 != "") {

            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);

            }

        }; 
        
    };
    
};

const onWinner = () => {
    
    // win.innerText="The Match Was Draw";
    // win.classList.remove("hide");
}

const gameReset = () => {
   turnO = true ;
   enableBoxes();
   win.classList.add("hide");
}

reset.addEventListener("click",gameReset);