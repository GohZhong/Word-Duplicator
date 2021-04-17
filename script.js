const input = document.getElementById("input");
const number = document.getElementById("num");
const output = document.getElementById("output");
const submit = document.getElementById("submit");
const space = document.getElementById("checkspace");
const comma = document.getElementById("checkcomma");
const char = document.getElementById("charCount");
const copy = document.getElementById("copy");

//checks number range is between 0<n<1000
let checkpoint = () =>{
    if (0 < number.value && number.value < 10001) {
        stringMultiplier(checkSpace(),checkComma());
    }
    else{
        alert("Number given is not within 1 and 1000");
    }
}

//checks Space and Comma
let checkSpace = () =>{
    return space.checked;
}

let checkComma = () =>{
    return comma.checked;
}

//multiplies string to fit within character limit
let stringMultiplier = (spaced=false, comma=false) =>{
    let string = input.value;
    let outputText = "";
    let inputLength = input.value.length;
    if (spaced == true || comma == true) {
        if (comma == true){string += ",";inputLength += 1;}
        if (spaced == true){string += " ";inputLength += 1;}
    }
    for (i=0; i < Math.floor(number.value/inputLength); i++) {
        outputText = outputText + string;
    }
    output.innerHTML = outputText;
    charCount() 
}

let charCount = () =>{
    char.innerHTML = `Character count: ${output.value.length}`;
}

//Enter keypress listener
let keyPress = (event) =>{
    if (event.keyCode === 13){
        checkpoint();
    }
}

//copy to clipboard
let copyToClipboard = () =>{
    output.select();
    document.execCommand("copy");
}

//event listeners
submit.addEventListener("click",checkpoint);
input.addEventListener("keypress",keyPress);
number.addEventListener("keypress",keyPress);
copy.addEventListener("click",copyToClipboard);
output.addEventListener("input",charCount);




