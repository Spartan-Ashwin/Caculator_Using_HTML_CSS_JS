
var expression='';

function calculate( c){

    expression+=c;
    var dis=document.querySelector('.display');
    dis.innerHTML=expression;
}

function ans(){

    var val=eval(expression);

    var dis=document.querySelector('.display');
    dis.innerHTML=val;
    expression='';
}

function clearDisplay(){

    var dis=document.querySelector('.display');
    dis.innerHTML='';
    expression='';

}

function bgcolorChange(){
  
    

}