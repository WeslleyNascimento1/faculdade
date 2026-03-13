var arr = [1, 2, 3, 4, 5, 6, 7]

arr.splice(2, 2)

console.log(arr)

var nomes = ["Maria", "João", "Lucas", "Pedro"]
var novos = nomes.splice(1, 1, "Luiz")

console.log(nomes)


var pais = ["Brasil", "Argentina", "Colombia"]

pais.unshift("Uruguai")
console.log(pais)