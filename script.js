const display = document.getElementById("display");

function appendToDisplay(e){
    display.value += e;
}

function clearDisplay() {
    display.value = "";
}

function Calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }    
}