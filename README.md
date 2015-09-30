# church_encoding_js
Church Encoding implementation in the minimal λ-calculus subset of javascript

Theory foundation:
zero  = Lf.Lx.x     
one   = Lf.Lx.(f x)      
two   = Lf.Lx.(f (f x))      
three = Lf.Lx.(f (f (f x)))     
four  = Lf.Lx.(F (f (f (f x))))

inc = Ln.Lf.Lx.(f ((n f) x)) 
