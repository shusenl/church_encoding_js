# church_encoding_js

##### Church Encoding implementation in the minimal λ-calculus subset of javascript. 
##### With the new syntax ([arrow function =>](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)) introduced in ES6, we may have one of the most concise expression of lambda calculus in any language.



##### lambda calculus:
```
zero = λf.λx.x     
one  = λf.λx.f x
two  = λf.λx.f(f x)
inc  = λn.λf.λx.f(n f x)
```



##### javascript:
```javascript
var zero = f => x => x;
var one = f => x => f(x);
var two = f => x => f(f(x));
var inc = n => f => x => f(n(f)(x)); //increment value by 1
```

