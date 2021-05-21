const convertFahrToCelsius = f => {
    // condition 1 checks if the passed parameter is an array
    // condition 2 checks if the passed parameter is an object and not null

    if(Array.isArray(f)){
        console.log(f, 'is not a valid number but a/an array');
    } else if(typeof f === 'object' && f !== null) {
        console.log(f, 'is not a valid number but a/an object');
    } else {
        console.log(((f - 32) * 5 / 9).toFixed(4));
    }
}

convertFahrToCelsius(0);
convertFahrToCelsius('0');
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp : 0});

const checkYuGiOh = num => {
    if(num == Number.parseInt(num)){
        num = Number.parseInt(num);
        let res = [];
        for(let i = 1; i <= num; i++){
            if(i % 2 === 0){
                if(i % 3 === 0 && i % 5 === 0){
                    res.push('yu-gi-oh');
                } else if(i % 3 === 0) {
                    res.push('yu-gi');
                } else if(i % 5 === 0) {
                    res.push('yu-oh');
                }else {
                    res.push('yu');
                }                
            } else if(i % 3 === 0){
                if(i % 5 === 0) {
                    res.push('gi-oh');
                }else {
                    res.push('gi');
                }
            } else if( i % 5 === 0){
                res.push('oh');
            } else {
                res.push(i);
            }
        }
        console.log(res);
    } else {
        console.log(`invalid parameter: "${num}"`);
    }
}

checkYuGiOh(10)
checkYuGiOh("5")
checkYuGiOh("fizzbuzz is meh")