// N1

let funcWithMath = setMath('-');

let res = funcWithMath(10,2,3);
let res_1 = funcWithMath(3,1);

console.log('N1 --> ' , res); // 10 - 2 - 3 = 5;
console.log('N1 --> ' ,res_1); // 3 - 1 = 2;

function setMath(a){
    return function (...number) {
        let result,
            str = '';
        for (let i = 0; i < number.length; i++) {
            str += number[i] + a;
        }
        str = str.substr(0, str.length - 1);
        if (a == '-') {
            result = number.reduce(function (previousValue, currentValue, index, array) {
                return previousValue - currentValue;
            });
        } else if (a == '+') {
            result = number.reduce(function (previousValue, currentValue, index, array) {
                return previousValue + currentValue;
            });
        } else if (a == '*') {
            result = number.reduce(function (previousValue, currentValue, index, array) {
                return previousValue * currentValue;
            });
        } else if (a == '/') {
            result = number.reduce(function (previousValue, currentValue, index, array) {
                return previousValue / currentValue;
            });
        }
        str += '=' + result;
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
console.log('N2 --> ' , whatDo_2('*')); // 3*3*9=81
console.log('N2 --> ' , whatDo_3('/')); // 12/3/2=2

function setNumbers(a){
    let arg = arguments;
    let str = '',
        result = arg[0];
    return function(b){
        if(b == '-'){
            for(let i = 0; i < arg.length; i++){
                str += arg[i] + '-';
                if(i > 0){
                    result -= arg[i];
                }
            }
        }else if(b == '+'){
            for(let i = 0; i < arg.length; i++){
                str += arg[i] + '+';
                if(i > 0){
                    result += arg[i];
                }
            }
        }else if(b == '*'){
            for(let i = 0; i < arg.length; i++){
                str += arg[i] + '*';
                if(i > 0){
                    result *= arg[i];
                }
            }
        }else if(b == '/'){
            for(let i = 0; i < arg.length; i++){
                str += arg[i] + '/';
                if(i > 0){
                    result /= arg[i];
                }
            }
        }
        str = str.substr(0, str.length - 1);
        str += '=' + result;
        return str;
    }
}