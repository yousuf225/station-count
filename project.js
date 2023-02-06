let num=0

function increment(){
    num += 1
    document.getElementById("add").textContent =num
    console.log(document.getElementById("add").textContent =num)
}
function increment2(){
    num += 2
    document.getElementById("add").textContent =num
    console.log(document.getElementById("add").textContent =num)
}
function increment3(){
    num +=3
    document.getElementById("add").textContent =num
    console.log(document.getElementById("add").textContent =num)
}
let score=0
function increment4(){
    score += 1
    document.getElementById("add2").textContent =score
    console.log(document.getElementById("add2").textContent =score)
}
function increment5(){
    score += 2
    document.getElementById("add2").textContent =score
    console.log(document.getElementById("add2").textContent =score)
}
function increment6(){
    score +=3
    document.getElementById("add2").textContent =score
    console.log(document.getElementById("add2").textContent =score)
}
function reset() {
    num =0
   score=0
    document.getElementById("add").textContent = num
    document.getElementById("add2").textContent =score
    console.log("Reset")
}



