let x=2;
let y=2;
let z=2;
if (x>y && x>z) {
    console.log ('x');
} else if (y>z && y>x) {
    console.log ('y');
} else if (z>x && z>y) {
    console.log ('z');
} else if (x==y && x>z) {
    console.log ('x e y');
} else if (x==z && x>y) {
    console.log ('x e z');
} else if (y==z && y>x) {
    console.log ('y e z');
} else {
    console.log ('São todos iguais');
}