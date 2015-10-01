# church_encoding_js

##### Church Encoding implementation in the minimal λ-calculus subset of javascript. 
##### With the new syntax ([arrow function =>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)) introduced in ES6, we may have one of the most concise expression of lambda calculus in any language.



##### lambda calculus:
```
zero  = Lf.Lx.x     
one   = Lf.Lx.(f x)      
two   = Lf.Lx.(f (f x))      
inc = Ln.Lf.Lx.(f ((n f) x)) 
```



##### javascript:
```javascript
var zero = f => z => z;
var one = f => z => f(z);
var two = f => z => f( f(z) );
var inc = n => f => z => n(f) (f (z) ); //increment value by 1
```

