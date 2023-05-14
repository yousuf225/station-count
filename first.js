
 let count = 0 

function increment() {
   count += 1 
   document.getElementById("count-el").innerText = count
  
   
}
function save(){
    
    let p = count  + " - "
    document.getElementById("save-el").textContent += p
    console.log(count)
    document.getElementById("count-el").innerText =0
    count = 0
}
function reset(){
    document.getElementById("count-el").innerText = ""
    count=""
}






