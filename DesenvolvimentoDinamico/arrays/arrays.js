var valores = [8, 1, 7, 2, 9]

console.log(valores[3])

console.log("Array invetido: " + valores.reverse())

for (var pos = 0; pos < valores.length; pos++){
    console.log("Posição: " + pos + " Valor: " + valores[pos])
}


var carros = []
carros[0] = "Volvo"
carros[1] = "Jeep"


var motos = new Array("BMW", "Yamaha", "Honda")


var soma = 0;
for (var pos = 0; pos < valores.length; pos++){
    soma += valores[pos]
}

var media = soma/valores.length

console.log(media)


var arr1 = [1, 2, 3, 4, 5, 6]

console.log(arr1.join(" -> "))

