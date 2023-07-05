//document.getElementById("count").innerText=5

let countEl=document.getElementById("count_el")   //getElementById is a function in which we are passing arguments 
let count=parseInt(countEl.innerText)              //things written before '.' are mostly the Objects on which we're performing functions
let saveEl= document.getElementById("save-el")

function increment(){
    count+=1
    countEl.textContent=count
}
function decrement(){
    count-=1
    countEl.textContent=count
}

function save(){
    let result=+count+" - "
    saveEl.textContent+=result

    countEl.textContent=0
    count=0
}