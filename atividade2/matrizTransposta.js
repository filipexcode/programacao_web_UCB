function transporMatriz(A){
    for(let i = 0; i < A.length; i++){
        for(let i = 0; j < A[0].length; j++){
            A_string += "" + A[i][j] + "";
        }
        A_string += "\n";
    }
    console.log(A_string)
}

let A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(transporMatriz(A));