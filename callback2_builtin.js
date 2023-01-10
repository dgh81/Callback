
//built-in callback functions:
// 'Daniel' indsættes som parameter i funktionen
//timeOut er et asynkront callback
setTimeout(hello, 2000, 'Daniel');

function hello(nm){
    console.log('hello', nm);
};