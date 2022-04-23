let nota = 60;
if (nota<0 || nota>100) {
    console.log ('erro');
} else if (nota>=90) {
    console.log ('A');
} else if (nota>=80 && nota<90) {
    console.log ('B');
} else if (nota<80 && nota>=70) {
    console.log ('C');
} else if (nota<70 && nota>=60) {
    console.log ('D');
} else if (nota<60 && nota>=50) {
    console.log ('E');
} else {
    console.log ('F');
}