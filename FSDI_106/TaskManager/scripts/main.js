function sayHello(name){
console.log("Hello" + name);
}

function sum(num1, num2){
    let total = num1+num2;
    return total;

    console.log("Never returns anyting after return")
}

function printNumnbers(){
    for (let i=1; i<21; i++){
        if (i !=7 && i !=13){
            console.log(i);
        }
    }

    let color = "red";
    let age = 0;

    if (!color){// if color 
        alert("Error: a color is needed");
    }

    if (!age) {
        alert("Error: age is required");
    }
}

function init(){
// all the HTML element are rendered

    console.log("Task Manager");
    sayHello("John");
    sayHello("Jane");

    let name = "Sergio";

    sayHello(name);
    sayHello("name");

    let last = "Rodgers";
    sayHello(last)

    let total = sum(21,21);
    console.log(total);

    //variable scope


    printNumnbers();


}

window.onload = init;

// Single Responsibility SRP
// Do not repeat yourself DRY
// Good Naming