linearRegression = function (x,y){
    // x = [] x values
    // y = [] y values
    // YOUR CODE
    // least squares method
    


    /*
     * Calculate m and b for the formular:
     * y = x * m + b
     */


    // YOUR CODE
    // var m = 
    
    var m;

    // YOUR CODE
    //var b = 
    var b;
    


    //should return a function that given
    // x returns y 
    var lr = function(x){
        var y = m * x + b;
        return y;
    };   

    return lr;
};

function getRandomNumber()  { return Math.floor(Math.random()*100);}

var run =  function (){
    var x  = [];
    var y  = [];
    var lr = [];
    var length = 10;

    // get random points
    for (var i=0; i<length; i++){
        x[i] = getRandomNumber();
        y[i] = getRandomNumber();
    }

    // get linear regression equation
    lr = linearRegression(x, y);
    graph(x,y,lr);
};

