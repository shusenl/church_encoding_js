//strict subset of javascript include lambda, single parameter function, function call
//use arrow function definition in ES6
//the following is the  same as: void = function(x){return x;} 
var void = x => x;

var zero = f => z => z; //z indicate zero
var one = f => z => f(z);
var two = f => z => f( f(z) );
var inc = n => f => z => n(f) (f (z) ); //n indicate the input function

//////// helper function - doesn not restrict to the subset ///////////
var numberValue = n => n( x => x+1 )(0);

// short cut to generate n, used 'for which is outside the minimal subset
var number = n => f => {
    return function(z) { 
      for(var i=0; i<n; i++) 
        z = f(z); 
      return z;}  
    };

console.log( 'value of zero: ' + numberValue( zero ));
console.log( 'value of one: ' + numberValue( inc(zero) ));
console.log( 'value of 10: ' + numberValue( number(10) ));





