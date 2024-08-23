const notas = [0, 8.5, false, "10"]

notas[2] = true

console.log(notas)

console.log(notas.length)

for(let i = 0; i < notas.length; i++){

    if(typeof notas[i] == "number"){
        if(notas[i] >= 7){
            console.log("aprovado")
        }else{
            console.log("reprovado")
        }
    }else{
        console.log("Nota inválida")
    }

}

let A = [
    [2, 1, 0],
    [0, 1, 0],
    [1, 2, 1]
]

console.log(A[1][2])

let capitais = {
    DF : 'brasilia',
    DF_DDD : 61,
    SP : 'sao paulo',
    RJ : 'rio de janeiro'
}

console.log(capitais.DF)

/*for(const key in capitais){
    const val = capitais[key]
    console.log(key + ': ' + val)
}

/**
 * @param {integer} n
 * @returns {boolean}
 */

/*function varificarNumeroPar(n){
    if(n%2==0){
        return true
    } else{
        return false
}
}

console.log(verificarNumeroPar(2))
console.log(verificarNumeroPar(3))*/