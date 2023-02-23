// N1
let funcWithMath = setMath('-');

let res = funcWithMath(10,2,3);
let res_1 = funcWithMath(3,1);

console.log('N1 --> ' , res); // 10 - 2 - 3 = 5;
console.log('N1 --> ' ,res_1); // 3 - 1 = 2;

function setMath(a){
    return function (...number) {
        let result;
        let arg = Array.prototype.slice.call(arguments);
        let str = arg.join(` ${a} `);
        result = number.reduce(function (previousValue, currentValue, index, array) {
            if (a == '-') {
                    return previousValue - currentValue;
            } else if (a == '+') {
                    return previousValue + currentValue;
            } else if (a == '*') {
                    return previousValue * currentValue;
            } else if (a == '/') {
                    return previousValue / currentValue;
            }
        });
        str += ' = ' + result;
        return str;
    }
}

// N2
let whatDo = setNumbers(10,2,3);
let whatDo_1 = setNumbers(3,1);
let whatDo_2 = setNumbers(3,3,9);
let whatDo_3 = setNumbers(12,3,2);

console.log('N2 --> ' , whatDo('-')); // 10 - 2 - 3 = 5;
console.log('N2 --> ' , whatDo_1('+')); // 3 + 1 = 4;
console.log('N2 --> ' , whatDo_2('*')); // 3 * 3 * 9 = 81
console.log('N2 --> ' , whatDo_3('/')); // 12 / 3 / 2 = 2

function setNumbers(a){
    let arg = Array.prototype.slice.call(arguments);
    let str = '',
        result = arg[0];
    return function(b){
        str = arg.join(` ${b} `)
        for(let i = 1; i < arg.length; i++){
            if(b == '-'){
               result -= arg[i];
            }else if(b == '+'){
                        result += arg[i];
            }else if(b == '*'){
                        result *= arg[i];
            }else if(b == '/'){
                        result /= arg[i];
            }
        }
        str += ' = ' + result;
        return str;
    }
}