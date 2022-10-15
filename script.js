const outputBox = document.getElementById("textview");

function clean(){
    outputBox.value = "";
}
  
function back(){
    outputBox.value = outputBox.value.slice(0,-1)
}

function insert(num){
    outputBox.value += num
}
  
function equals(){
    outputBox.value = eval(outputBox.value)
}