function doThing(other){
    let x = 7;
    console.log(x);
    //lots of code here...
    let name = 'Steve';
    other(name);
};

function hello(nm){
    console.log('hello', nm);
};

doThing(hello);