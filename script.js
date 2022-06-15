let preValue = "";
let postValue = "";
let selectedOperator = "";



function display(val){
    // let screeVal = document.getElementById("calculator-screen").value
    document.getElementById('calculator-screen').style.fontSize='5rem';
    if(document.getElementById("calculator-screen").value.includes(".")){
        console.log("dot inserted")
        document.getElementById("decimal").setAttribute('disabled', '');
    }

    if(document.getElementById("calculator-screen").value === "0"){
        document.getElementById("calculator-screen").value =val;

    }else{
    
    document.getElementById("calculator-screen").value += val;
    console.log("selected: ",val);
    }
    if(selectedOperator =='%'){
        document.getElementById('calculator-screen').value = mod(preValue);

    }

    if (selectedOperator ==""){
        preValue= document.getElementById("calculator-screen").value;
        console.log("preValue",preValue);

    } else{
        document.getElementById('calculator-screen').value = ''
        document.getElementById("decimal").removeAttribute('disabled');

        document.getElementById("calculator-screen").value +=val
        postValue+= document.getElementById("calculator-screen").value
        document.getElementById("calculator-screen").value =postValue
        console.log("preValue",preValue)
        console.log("operator",selectedOperator)
        console.log("postValue",postValue)
        
    }  
    return val
}

function solve(){
    if(preValue=="" || postValue==""||selectedOperator==""){
        document.getElementById('calculator-screen').style.fontSize='5rem';
        return("0");
    }
    document.getElementById("calculator-screen").value= operate(preValue,selectedOperator,postValue)
    preValue=  document.getElementById("calculator-screen").value
    let res= operate(preValue,selectedOperator,postValue);
    
    return res

}

function clearScreen(){

    document.getElementById('calculator-screen').value = '0'
    preValue = "";
    postValue = "";
    selectedOperator = "";

}

function setOperator(oper){
    document.getElementById('calculator-screen').style.fontSize='5rem'
    if(oper =='+/-'){
        document.getElementById('calculator-screen').value = preValue*-1;
        preValue*=-1
        selectedOperator= "";

    }
    
   else if(oper =='%'){
        document.getElementById('calculator-screen').value = mod(preValue);
        selectedOperator= "";

    }
    else if (selectedOperator===""){
        selectedOperator= oper;
        console.log(selectedOperator)

    }else{
        solve();
        selectedOperator= oper;
        postValue="";
        console.log(selectedOperator);    
    }
    return (selectedOperator);
}


const add =(x,y)=>{
    return(parseInt(x)+parseInt(y));
}

const subtract =(x,y)=>{
    return(x-y);
}

const multiply = (x,y)=>{
    return(x*y);
}

const divide = (x,y)=>{
    if(y=="0"){
        document.getElementById('calculator-screen').style.fontSize='20px'
        return("To infinity...and beyond!");
        
    }
    return(x/y);
}

const mod = (x)=>{
    return (x/100);
}

const operate = (x,operator,y)=>{
    let result=0
    if (operator == '+'){
        result = add(x,y);
    }
    else if (operator == '-') {
        result = subtract(x,y);
    } 
    else if(operator == '*') {
        result = multiply(x,y);
    }
    else if(operator == '/') {
        result = divide(x,y);
    } 
    // selectedOperator = "";
    if(result == NaN){
        document.getElementById('calculator-screen').style.fontSize='5rem'
        return ("0");
    }
    postValue="";
    if(result.toString().length >9){
        result = result.toString().substring(0, 9);
    
    }
    return(result);
    
}

