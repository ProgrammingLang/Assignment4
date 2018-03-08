var fp = require('./fp');
var util = require('util');

if ( ! exports )
   var exports = [ ];



// Your solution for problem 1 must appear between this and matching
// end comment below

var minMax = function (lol) {
  return fp.map(function(r) {return fp.makeList(
        fp.reduce(function(x,y) {return (fp.isLT(x, y) ? x : y); }, r, Number.MAX_SAFE_INTEGER),
        fp.reduce(function(x,y) {return (fp.isGT(x, y) ? x : y);}, r, 				  Number.MIN_SAFE_INTEGER));}, lol);
};

////////// End of code for problem 1 ////////////////////


// Your solution for problem 2 must appear between this and matching
// end comment below

var deepMap = function (f,ns) {
	if(fp.isNull(ns)) {
		return ns;
	}
    else if(fp.isList(fp.hd(ns))) {
		return fp.cons(deepMap(f, fp.hd(ns)), deepMap(f, fp.tl(ns)));
	}
	else {
		return fp.cons(f(fp.hd(ns)), deepMap(f, fp.tl(ns)));
	}
};


////////// End of code for problem 2 ////////////////////

// Your solution for problem 3 must appear between this and matching
// end comment below

var countOccurrences = function (ns) {
  var mapper = function(n, r) {
		return fp.makeList(r, fp.reduce(function(a, y)
      {return fp.add(a, (fp.isEq(y, r) ? 1 : 0)); }, n,  0));
	};

  return  fp.map(fp.curry(mapper)(ns), ns);

};

////////// End of code for problem 3 ////////////////////


// Your solution for problem 4 must appear between this and matching
// end comment below


var isInRect = function (t,l,b,r,point) {
    if (fp.isLT(fp.hd(fp.tl(point)),t)) {
	if (fp.isGT(fp.hd(fp.tl(point)),b)) {
	    if (fp.isGT(fp.hd(point),l)) {
		if (fp.isLT(fp.hd(point),r)) {
		    return true;
		}// point is to the left of r
	    }// point is to the right of l
	}// point is above b
    }// point is below t
    return false;
};// isInRect function

var topEdge = 1000000;
var leftEdge = -1000000;
var bottomEdge = -1000000;
var rightEdge = 1000000;

// curry5 curries a function of five parameters
var curry5 = function (f) {
    return function(u) {
		return function(v) {
			return function(w) {
				return function(x) {
          return function(y) {
            return f(u, v, w, x, y);
          }
				}
			}
		}
	}
};

// Use curry5 to define each of the five functions specified in the
// assignment
var isInFirstQuadrant = function(x) { return x; };
var isInSecondQuadrant = function(x) { return x; };
var isInThirdQuadrant = function(x) { return x; };
var isInFourthQuadrant = function(x) { return x; };
var isInUnitSquare = function(x) { return x; };



////////// End of code for problem 4 ////////////////////

// Your solution for problem 5 must appear between this and matching
// end comment below


var makeCompositeMFRFunc = function(mf, ff, rf, acc)  {

    return 0;
};


////////// End of code for problem 5 ////////////////////

// Your solution for problem 6 must appear between this and matching
// end comment below


var howManyWithLargerGTSmaller = function (list) {
    return 0;
};


////////// End of code for problem 6 ////////////////////

////////// All test cases you add must be below this comment line

////////// Everything below this line will be stripped away when your
////////// submission is evaluated

console.log("Testing Problem 1");
console.log(minMax( [[1,2,3],[5,4],[6],[7,10,9,9,10]] ));

console.log("Testing Problem 2");
console.log(deepMap(function(x) { return x + 1; }, [1, 2, [3, 4, 5], 6]));
console.log(deepMap(function(x) { return 2 * x; }, [[1,2,3],[5,4],[6],[7,10,[9,9],10]] ));

console.log("Testing Problem 3");
console.log(countOccurrences( [5] ));
console.log(countOccurrences( [1,2,3] ));
console.log(countOccurrences( [1,2,3,2,3,1,4,5,1] ));

console.log("Testing Problem 4");

console.log(isInFirstQuadrant([1,1]));
console.log(isInFirstQuadrant([-1,1]));
console.log(isInFirstQuadrant([-1,-1]));
console.log(isInFirstQuadrant([1,-1]));
console.log(isInSecondQuadrant([1,1]));
console.log(isInSecondQuadrant([-1,1]));
console.log(isInSecondQuadrant([-1,-1]));
console.log(isInSecondQuadrant([1,-1]));
console.log(isInThirdQuadrant([1,1]));
console.log(isInThirdQuadrant([-1,1]));
console.log(isInThirdQuadrant([-1,-1]));
console.log(isInThirdQuadrant([1,-1]));
console.log(isInFourthQuadrant([1,1]));
console.log(isInFourthQuadrant([-1,1]));
console.log(isInFourthQuadrant([-1,-1]));
console.log(isInFourthQuadrant([1,-1]));
console.log(isInUnitSquare([0,0]));


console.log("Testing Problem 5");
// Uncomment the lines below once you are ready to test makeCompositeMFRFunc
// console.log(
//     makeCompositeMFRFunc(
// 	function(x) {return x + 1;},
// 	function(x) {return x > 0;},
// 	fp.add,
// 	0)
//     ([0,0,-1,-1,4,3])
// 	   );
//
//
// console.log(
//     makeCompositeMFRFunc(
// 	function(x) {return x + 3;},
// 	function(x) {return fp.isZero(x % 2);},
// 	function(a,n) { return fp.cons(n, a); },
// 	[])
//     ([11,15,12,4,3])
// 	   );


console.log("Testing Problem 6");
console.log( howManyWithLargerGTSmaller ( [] ));
console.log( howManyWithLargerGTSmaller ( [ [1,2,3] ] ));
console.log( howManyWithLargerGTSmaller ( [ [1,1],[2] ] ));
console.log( howManyWithLargerGTSmaller ( [ [1,2,3], [2,2],[1,-1] ] ));
