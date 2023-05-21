
 let count = 0 
const countEl= document.getElementById("count-el")
const saveEl=document.getElementById("save-el")
const resetEl=document.getElementById("reset-btn")
function increment() {
   count += 1 
   countEl.innerText = count   
}
function save(){
    
    let p = count  + " - "
    saveEl.textContent += p
    console.log(count)
    countEl.innerText =count
    count = 0
}
function reset(){
    resetEl.addEventListener('dblclick' ,function(){
     countEl.textcontent=""
    })
}






