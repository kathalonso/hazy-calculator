
function calculate (input) {
    //numberfy stringy numbers
    for (let i=0; i < input.length; i++) {
        const element = input[i];      
        //check for strings
        if ((typeof(element)) === 'string') {
            //check for numbers in those strings
            if (!isNaN(element)) {
                // change stringy numbers to regular numbers
                input[i] = parseInt(element);
            }
        }
    }
   
    // removal of undefined and non-numerics 
    // use filter() to return numbers and operators

    function getNumsAndOperators(element){
        if (element === '') {
            return false;
        }
        return !isNaN(element) || element === '+' || element === '-' || element === '*' || element === '/'; 
    }
    input = input.filter(getNumsAndOperators);


    // returns NaN if the array does not represent a proper operation


    // how input should run
    const val1 = input[0];
    const operand = input[1];
    const val2 = input[2];

    switch(operand) {
        case '+':
        return (val1 + val2); 
        break;

        case '-':
        return (val1 - val2);
        break;

        case '*':
        return (val1 * val2);
        break;

        case '/':
        return (val1 / val2);
        break;

        default:
        return NaN;
    }

}

module.exports = calculate