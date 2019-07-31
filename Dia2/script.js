// var jupiter = {
//     Temperatura: {
//         Mínima: "110 K - 163,15 °C",
//         Media: "152 K-121,15 °C",
//         Máxima: "198 K-75,15 °C"
//     },
//     Satélites: 79,
//     Diámetro: 142984,
//     Gravedad: "24.79 m/s²"
// }
// var mercurio = {
//     Temperatura: {
//         Mínima: "110 K - 163,15 °C",
//         Media: "152 K-121,15 °C",
//         Máxima: "198 K-75,15 °C"
//     },
//     Satélites: 79,
//     Diámetro: 142984,
//     Gravedad: "24.79 m/s²"
// }

class Planeta {
    constructor(nombre, masa, satelites, minima, media, maxima, imagen){
        this.nombre = nombre,
        this.masa = masa,
        this.satelites = satelites,
        this.temperatura = {
            minima: minima,
            media: media,
            maxima: maxima
        };
        this.imagen= imagen;
    }  
    
    rotar(){
        console.log("Me estoy moviendo");
    }

    tiempo(){
        return this.masa * 3.1416;
    }
}

var jupiter = new Planeta("jupiter", 333, 77, 1, 2, 3, "https://www.nationalgeographic.com.es/medio/2018/02/28/auroras-en-jupiter__1280x1280.JPG")
var venus = new Planeta("venus", 111, 77, 1, 2, 3, "https://bloximages.newyork1.vip.townnews.com/elvocero.com/content/tncms/assets/v3/editorial/1/fc/1fc7f8a9-a241-56c3-8b68-c199f717608e/59355ee03288b.image.jpg")
var mercurio = new Planeta("mercurio", 333, 77, 1, 2, 3, "https://www.nationalgeographic.com.es/medio/2018/02/28/auroras-en-jupiter__1280x1280.JPG")

console.log(jupiter);
console.log(venus);
console.log(mercurio);

document.getElementById("planeta1img").src = jupiter.imagen;
document.getElementById("planeta1nombre").innerHTML = jupiter.nombre;
document.getElementById("planeta1desc").innerHTML = `Masa: ${jupiter.masa}`;

document.getElementById("planeta2img").src = venus.imagen;
document.getElementById("planeta2nombre").innerHTML = venus.nombre;
document.getElementById("planeta2desc").innerHTML = `Masa: ${venus.masa}`;

// jupiter.rotar();

// var tiempo = venus.tiempo();
// console.log(tiempo);






// Clase Perro
// Nombre, Raza, Edad, continentes [3]
//Metodo Ladrar, listar continentes
//3 instancias

// class Perro{
//     constructor(nombre, raza, edad, continentes){
//         this.nombre = nombre,
//         this.raza = raza,
//         this.edad = edad,
//         this.continentes = continentes
//     }
//     ladrar(){
//         console.log(this.nombre + "  está ladrando de felicidad");
//     }
//     encuentra(){
//         console.log("A " + this.nombre + " lo puedes encontrar en: ");
//         for (var i = 0; i < this.continentes.length; i++)
//             console.log((i+1) + ": " + this.continentes[i]);
//     }
// }

// var perro1 = new Perro("Pipo", "Doberman", 3,["america", "asia", "europa"])
// var perro2 = new Perro("Luna", "Pointer", 2,["america", "oceania", "africa"])
// var perro3 = new Perro("Pamela", "Afgano", 1,["africa", "asia", "europa"])
// console.log(perro1);
// console.log(perro2);
// console.log(perro3);
// perro1.ladrar();
// perro1.encuentra();
// perro2.ladrar();
// perro2.encuentra();
// perro3.ladrar();
// perro3.encuentra();

// class Bebida {
//     constructor(nombre, ml, imagen){
//         this.nombre = nombre,
//         this.ml = `${ml} ml`,
//         this.imagen = imagen
//     }
// }

// class BebidaAlcoholica extends Bebida {
//     constructor(nombre, ml, gradoAlcohol, artesanal){
//         super(nombre, ml)
//         this.gradosAlcohol = `${gradoAlcohol}% de Alcohol`,
//         this.artesanal = artesanal
//     }
// }

// var agua = new Bebida("Agua natural", 600);
// var cerveza = new BebidaAlcoholica("Cerveza", 355, 4,true);
// console.log(agua);
// console.log(cerveza);

// document.getElementById("agua").src = agua.imagen;
// document.getElementById("aguaNombre").innerHTML = agua.nombre;

