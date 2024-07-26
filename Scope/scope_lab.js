var globalVar  = "global variable";
let globalLet = "global, but scopet let "
const globalconst = "global constant"

{
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

console.log(globalVar)
console.log(globalLet)
console.log(globalconst)

// console.log(blockVar);
// console.log(blockLet);


function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError