//strict subset of javascript include lambda, single parameter function, function call
//<exp> = <var>
//      |  ( (<var>) => <exp>) // function definition
//      |  <exp>(<exp>) //function call

//use arrow function definition in ES6
//the following is the var Void = function(x){return x;} is the same as var Void
//reference (for predecessor): http://www.cs.unc.edu/~stotts/204/Lambda/church.html

var zero = f => x => x; 
var one = f => x => f(x);
var two = f => x => f(f(x));

var inc = n => f => x => n(f) (f(x)); //n indicate the input function
//var inc = n => f => x => f(n(f)(x)); //same as previous line

//only single parameter function is allowed
var add = n => m => f => x => n(f) (m(f)(x));
var mul = n => m => x => n(m(x));
var pow = n => m => m(n);

//define predecessor
var first = x => y => x;
var second = x => y => y;
var pair = x => y => f => f(x)(y);
var prefn = f => p => pair(f(p(first))) (p(first));
var pred = n => f => x => n(prefn(f))(pair(x)(x)) (second);

////////////  helper function - doesn not restrict to the subset ///////////
var numberValue = n => n( x => x+1 )(0);

// short cut to generate n, used 'for which is outside the minimal subset
var number = n => f => x => {
      for(var i=0; i<n; i++) x = f(x);
      return x;}

// testing
console.log( 'value of 0 = ' + numberValue( zero ) );
console.log( 'value of 0+1 = ' + numberValue( inc(zero) ) );
console.log( 'value of 1+2 = ' + numberValue( add(one)(two) ) );
console.log( 'value of 2*3 = ' + numberValue( mul(two)(inc(two)) ) );
console.log( 'value of 2^3 = ' + numberValue( pow(two)(inc(two)) ) );
console.log( 'value of 3^2 = ' + numberValue( pow(inc(two))(two) ) );
console.log( 'value of 2-1 = ' + numberValue( pred(two) ) );


