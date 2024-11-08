const display  = document.querySelector('.display');
function appendToPlay(input){
    display.value +=  input;
}
function clearFor(){
    display.value = '';
}
function calculateFor(){
   try{
    display.value = eval( display.value);
   }
   catch(error){
    display.value ='error';
   }
}
function percentageCalculator(){
    if(display.value){
        display.value = eval( display.value)/100;
    }else {
      display.value = '';
    }
}
function minusPlus(){
    if(display.value){
        display.value = -eval( display.value);
    }else {
      display.value = '';
    }
   
}