var input = document.getElementById('nombreConsulta');
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    PokemonConsulta();
  }
});

let PokemonConsulta = () => {
    let nombreConsulta1 = document.getElementById('nombreConsulta').value;
  if (nombreConsulta1 === '') {
    mensaje('Escribe el nombre de un Pokemon', 'error', 1500);
    return;
  }
  nombreConsulta = nombreConsulta1.toLowerCase();
  document.getElementById('nombreConsulta').value = nombreConsulta;

    Swal.fire({
        allowOutsideClick: false,
        type: 'question',
        text: 'Buscando en la base de datos del Pokedex...'
      });

      Swal.showLoading();
    let pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${nombreConsulta}/`).then(pokemon =>{
        Swal.close();
        if(pokemon.status === 200){
            pokemon.json().then(data => {
                Swal.fire(
                    'Excelente!',
                    'Lo hemos encontrado!',
                    'success'
                  )
                limpiaInformacion();
                let nombre = data.name;
                let imagen = data.sprites.front_default;
                let id = data.id;
                let mov1 = data.moves[0].version_group_details[0].version_group.name;
                let mov2 = data.moves[0].version_group_details[1].version_group.name;
                let mov3 = data.moves[0].version_group_details[2].version_group.name;
                let mov4 = data.moves[0].version_group_details[3].version_group.name;
    
                let criatura = new Pokemon(nombre, imagen, id, mov1, mov2, mov3, mov4);
                document.getElementById("Pokemon-nombre").innerHTML = criatura.nombre;
                document.getElementById("PokemonID").innerHTML = `ID: ${criatura.id}`;
                document.getElementById("PokemonMov1").innerHTML = `Movimiento 1: ${criatura.movimiento.mov1}`;
                document.getElementById("PokemonMov2").innerHTML = `Movimiento 2: ${criatura.movimiento.mov2}`;
                document.getElementById("PokemonMov3").innerHTML = `Movimiento 3: ${criatura.movimiento.mov3}`;
                document.getElementById("PokemonMov4").innerHTML = `Movimiento 4: ${criatura.movimiento.mov4}`;
                document.getElementById("Pokemon-img").src = criatura.imagen;     
            });
        }else{
            mensaje('Pokemon NO encontrado', 'error');
            limpiaInformacion();
        }
    });
}

class Pokemon{
    constructor(nombre, imagen, id, mov1, mov2, mov3, mov4){
        this.nombre = nombre;
        this.imagen = imagen;
        this.id = id;
        this.movimiento = {
            mov1: mov1,
            mov2: mov2,
            mov3: mov3,
            mov4: mov4
            }
        }
}

let limpiaInformacion = () => {
  document.getElementById('lblId').innerHTML = '';
  document.getElementById('lblNombre').innerHTML = '';
  document.getElementById('imgPokemon1').src = '';
  document.getElementById('imgPokemon2').src = '';
  document.getElementById('imgPokemon3').src = '';
  document.getElementById('imgPokemon4').src = '';
  document.getElementById('lstMovimientos').innerHTML = '';
}
// setTimeout(() => {
    
//  }, 3000);


let navbarLogo = "http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png";

document.getElementById("navbarLogo").src = navbarLogo;


// Clase Pokemon
// Nombre
// Imagen
// Id
// Movimientos {4}

// new