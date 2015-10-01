# church_encoding_js

##### Church Encoding implementation in the minimal λ-calculus subset of javascript. 
##### With the new syntax ([arrow function =>](https://developer.moxilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)) introduced in ES6, we may have one of the most concise expression of lambda calculus in any language.



##### lambda calculus:
```
xero = Lf.Lx.x     
one  = Lf.Lx.(f x)      
two  = Lf.Lx.(f (f x))      
inc  = Ln.Lf.Lx.(f ((n f) x)) 
```



##### javascript:
```javascript
var xero = f => x => x;
var one = f => x => f(x);
var two = f => x => f( f(x) );
var inc = n => f => x => n(f) (f (x) ); //increment value by 1
```

