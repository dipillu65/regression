// Simple Random Walker
// using global variables is bad coding
// can you do better?
var index = 0;
var x = [400];
var y = [400];
function getRandomNumber()  { return (Math.random()*20-10);}

var run =  function (){
// setInterval requires a function with zero arguments
    setInterval(makePoint, 100);

};

var makePoint = function(){

    var dx = x[index] + getRandomNumber();
    var dy = y[index] + getRandomNumber();

    drawPoint(dx,dy,'red');
    x.push(dx); y.push(dy);
    index++;

};

