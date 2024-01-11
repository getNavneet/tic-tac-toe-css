let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let i=10;
let isgameover=false;
let turn="X";
document.querySelector(".turn").innerText="Turn For : "+ turn
// alert()

// function to change turn
let changeturn=()=>{
if(turn=="X")
    return "O"
if (turn=="O")
return "X"
}

// function to check winning condition
const checkwinner=()=>{
    wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    insidebox =document.querySelectorAll(".insidebox")
    console.log(insidebox)
    wins.forEach(e=>{
    if((insidebox[e[0]].innerText === insidebox[e[1]].innerText) && (insidebox[e[2]].innerText === insidebox[e[1]].innerText) && (insidebox[e[0]].innerText !== "") )
    {
        document.querySelector(".turn").innerText="Winner is : " +turn
        isgameover= true
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "20vw";
        document.querySelector(".gif").style.width="100%"
        setTimeout(gameisover,4000)

        // alert("winner is== "+turn)//working well
    }
    // else{isgameover=false}
})
if(!isgameover) 
{i--;}
}
//  if(i==1) 
//  {
//  document.querySelector(".turn").innerText=" Match Draws !"}


// starts here;
// main logic - game starts from here 
insidebox =document.querySelectorAll(".insidebox")
Array.from(insidebox).forEach(element =>{   //also working for- insidebox.forEach()....
    element.addEventListener('click',()=>{
        if(element.innerText == "" && !isgameover ) // 
        {
            element.innerText=turn;
            audioTurn.play();
            checkwinner();
            turn = changeturn(); //ye check winner ke bad me rahega
            // console.log(isgameover)
            // console.log(i)
            if(!isgameover){  //why not working for (i>1)
                // alert()
                document.querySelector(".turn").innerText ="Turn For : " + turn
    }
    }
    if(i==1){
            document.querySelector(".turn").innerText ="Match Draws!" 
            setTimeout(gameisover,1400)
        }
    }
    )
})


// event listener to reset all 
let reset=document.querySelector('.reset-btn')
reset.addEventListener('click',()=>{
    insidebox=document.querySelectorAll(".insidebox")
    Array.from(insidebox).forEach(element =>{
        element.innerText = ""

    })
turn="X";
document.querySelector(".turn").innerText ="Turn For : "+turn
document.querySelector(".line").style.width = "0"
isgameover=false;
i=10;
document.querySelector(".gif").style.width="0"
})


let resetall=()=>{
        // alert("this rurn was of="+turn)
        insidebox=document.querySelectorAll(".insidebox")
        Array.from(insidebox).forEach(element =>{
            element.innerText = ""
    
        })
    turn="X";
    document.querySelector(".turn").innerText ="Turn For : "+turn
    document.querySelector(".line").style.width = "0"
    isgameover=false;
    document.querySelector(".gif").style.width="0"
    i=10;
    
}

let gameisover=()=>{
    resetall();
}
// gamestart();

// function resetfn() {
//     insidebox = document.querySelectorAll(".insidebox");
//     Array.from(insidebox).forEach(element => {
//         element.innerText = "";
//     }
//     );
//     // turn="X";
//     // document.querySelector(".turn").innerText ="Turn For :"+turn
// }






// let insidebox = document.querySelectorAll(".insidebox")
// Array.from(insideboxes).forEach( element =>{
// element.addEventListener('click', ()=>{
// let boxes= document.querySelectorAll(".box")
// element.innerText =turn


// }


// )
    
//     // alert()
     
// })


//  console.log(boxes)