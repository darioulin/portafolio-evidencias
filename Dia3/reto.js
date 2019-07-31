class Maestro {
    constructor(calificaciones){
        this.calificaciones = calificaciones;
    }
    calcularPromedio(){
        var noCalificaciones = o;
        var sumatoriaCalificaciones = 0;

        this.calificaciones.forEach(function(cal){
            sumatoriaCalificaciones += cal;
        });
        return sumatoriaCalificaciones / noCalificaciones;
    }
}

class MaestroDeFisica extends Maestro {
    constructor(calificaciones, antiguedad){
        super(calificaciones);
        this.antiguedad = `${antiguedad} años de antiguedad`;
        this.materia = "Física";
    }
}

class MaestroDeMusica extends Maestro{
    constructor(calificaciones, edad){
        super(calificaciones);
        this.edad = edad;
        this.materia = "Música";
    }
}

var maestro = new Maestro([10, 10, 10]);
var maestro2 = new MaestroDeFisica([10, 10, 10],7);
var maestro3 = new MaestroDeMusica([10, 10, 10],3);
console.log(maestro);
console.log(maestro2);
console.log(maestro3);

