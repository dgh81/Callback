
//built-in callback functions:

//forEach funktionen ved automatisk at det er elementerne i "names",
//der skal videregives til "hello" funktionen.
//forEach er et synkront callback
let names = ["Daniel", "Thomas", "Jakob"];

// Måde 1 - navngivet callback:
names.forEach(hello);

// Måde 2 - inline callback:

//name bliver igen automatisk givet til den anonyme funktion "hello"
names.forEach((name, idx, arr)=>{
    hello(name, idx, arr);
    // hello(name);
})

function hello(nm, idx, arr){
    console.log('hello', nm);
    // console.log('hello', nm, idx, arr);
};