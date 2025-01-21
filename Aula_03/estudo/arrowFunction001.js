function multiply_0 (x, y) {
    return x * y;
}

//Função constructor atribuída à variável multiply_1
let multiply_1 = new Function("x", "y", "return x * y");

//Função anônima atribuída à variável multiply_2
let multiply_2 = function (x, y) {
    return x * y;
};

//Uma function expression atribuída à variável multiply_3
let multiply_3 = function func_name(x, y) {
    return x * y;
};

//Arrow function
let multiply_4 = (a, b) => {return a * b}; 

console.log(multiply_0 (2, 3))
console.log(multiply_1 (3, 4))
console.log(multiply_2 (4, 5))
console.log(multiply_3 (5, 6))
console.log(multiply_4 (7, 8))

