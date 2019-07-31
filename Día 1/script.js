
//Objeto Literal
var sensei = {
    nombre: "Darío",
    edad: "23",
    cinta: "Roja",
    activo: true,
    stack: "MERN",
    saludo: function(nombre){ return "Saludos " + nombre;},
    despedida: function(){ return "Hasta luego!";}
};

var jupiter = {
Temperatura:{
Mínima:	"110 K - 163,15 °C",
Media: "152 K-121,15 °C",
Máxima:	"198 K-75,15 °C"
},
Satélites: 79,
Diámetro: 142984,
Gravedad: "24.79 m/s²"
}


console.log(sensei);

var saludo = sensei.saludo("Dario")
console.log(saludo);

var despedida = sensei.despedida()
console.log(despedida);

console.log(jupiter);