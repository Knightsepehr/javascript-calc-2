let textInput = document.getElementById("calc-input");
let buttons = document.querySelectorAll(".btn-primary");
let sumButton = document.getElementById("sum");
let equalButton = document.querySelector(".btn-success");
let resultLabel = document.getElementById("result");
let num1 = "";
let output = "";
let array = [];
let result = 0;

buttons.forEach(
    function (item , index) {
        item.addEventListener("click", () => {
            console.log(item.getAttribute('value'));
            num1 += item.getAttribute('value');
            // textInput.setAttribute("value",output);
            textInput.setAttribute("value",item.getAttribute('value'));
            console.log(num1);
        })
    }
);

sumButton.addEventListener("click", () => {
    console.log("sum");
    output += num1 + "+";
    array.push(num1);
    num1 = "";
    console.log(array,output);
    textInput.setAttribute("value",output);

} );

document.getElementById("equal").addEventListener("click", () =>{
    console.log("equals");
    array.forEach(function(item) {
        console.log(parseInt(item));
        result += parseInt(item);
    })
    resultLabel.innerText = result;
});