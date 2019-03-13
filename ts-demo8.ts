interface InterestCalculator{
    principal:number;
    rate:number;
    duration:number;
}

function calc(calc:InterestCalculator){
    return calc.principal * calc.rate/100/12 * calc.duration;
}

let amt = calc({principal:15000, rate:4.5, duration:36});

console.log(amt);