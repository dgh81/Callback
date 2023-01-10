
//built-in callback functions:
//navigator.geolocation.getCurrentPosition tager 2 funktioner som argumenter.
//Én funktion, der skal køres først, og derefter én, der skal køres, hvis den første fejler.
//(navigator virker kun i browser)

navigator.geolocation.getCurrentPosition(gotPosition,positionError,{});

function gotPosition(position){

};

function positionError(err){

};