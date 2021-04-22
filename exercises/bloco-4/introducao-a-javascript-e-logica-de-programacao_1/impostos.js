let s = 5000;
let inss = 0;
let ir = 0;
if (s<=1556.94) {
    inss=0.08*s;
} else if (s>1556.94 && s<=2594.92) {
    inss=0.09*s;
} else if (s>2594.93 && s<=5189.82) {
    inss=0.11*s;
} else {
    inss=570.88;
}
let sbase = s-inss;
if (sbase<=1903.98) {
    ir=0;
} else if (sbase>1903.98 && sbase<=2826.65) {
    ir=0.075*sbase-142.80;
} else if (sbase>2826.65 && sbase<=3751.05) {
    ir=0.15*sbase-354.80;
} else if (sbase>3751.05 && sbase<=4664.68) {
    ir=0.225*sbase-636,13;
} else {
    ir=0.27*sbase-869.36;
}
let sbruto = sbase-ir;
console.log (sbruto);