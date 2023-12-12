/*
const array = ["d", 2, 3, 4, 5, 6, 7, 8];
let a = [0, 7];
for (let i = 0; i < a.length; i++) {
    let b = a[i]
    let condition = array[b];
    if ( !isNaN(condition)) {
        console.log(true);
    }else{
        console.log(false);
    }
}

*/

const array = ["d", 2, 3, 4, "d", 6, 7, "d"];
let a = [0, 7, 4];
let [b, c, d] = a;
if ((array[b] === "d" &&
    array[c] === "d" &&
    array[d] === "d") || 
    (array[b] === "s" &&
    array[c] === "s" &&
    array[d] === "s")
) {
    console.log("You win");
} else {
    console.log("You lose");
}

