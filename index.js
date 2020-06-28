let rect = require('./rectangle');
function solveReact(l,b){
    console.log("Solving for rectangle with l ="+ l + " b=" +b);
    if(l <= 0 || b<= 0){
        console.log("reactangle dimention should be greater than zero ");
        
    }
    else 
    {
        console.log("area of the reactangle is " + rect.area(l,b));
        console.log("Perimeter of the react:" + rect.perimeter(l,b));
    }
}

solveReact(3,5);
solveReact(5,5);
solveReact(-4,5);