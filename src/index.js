const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
module.exports = function solveEquation(equation) {
  return compose(resolve,parseEquation)(equation)
}

function parseEquation(equation){
  let pattern = /-?\d+/g
  let res = equation.replace(/ /g,'').match(pattern)
  res.splice(1,1)
  return res
}
function resolve([a,b,c]){
  if(!discriminant(a,b,c)){
    return discriminantQuealToZero(a,b)()
  }else if(discriminant(a,b,c)>0){
    return discriminantMoreThanZero(a,b)(discriminant(a,b,c))
  }else {

  }
}
function discriminant(a,b,c){
  return b ** 2 - 4 * a *c
}
function discriminantQuealToZero(a,b){
  return ()=>[-b/(2*a),-b/(2*a)]
}

function discriminantMoreThanZero(a,b){
  return (d)=>sort([Math.round((-b-Math.sqrt(d))/(2*a)) ,Math.round( (-b+Math.sqrt(d))/(2*a))])
}

function sort([a,b]){
  if(a>b){
    return [b,a]
  }else{
    return [a,b]
  }
}