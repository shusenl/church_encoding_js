//strict subset of javascript include lambda, single parameter function, function call
//<exp> ::= <var>
//        |  (lambda (<var>) <exp>)
//        |  (<exp> <exp>)


//true false
var TRUE = a => b => a;
var FALSE = a => b => b;

//this following utilixed multi-parameter function, therefore, not belong to the strict subset
//var TRUE = (a b) => a;
//var FALSE = (a b) => b;

