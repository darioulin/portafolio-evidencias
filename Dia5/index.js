const request = require("request");
const rp = require("request-promise");

// const getName = (num) => {
//     return new Promise((resolve, reject) => {
//         request.get(`https://swapi.co/api/people/${num}`, (err, response, body)=> {
//             const character = JSON.parse(body);
//             response.statusCode === 200 
//                 ? resolve(character)
//                 : reject("Error en la peticion" + err)
//         });
//     });
// }

// getName(1).then(data => {
//     console.log(data);
// });

// const getFilms = (num) => {
//     return new Promise((resolve, reject) => {
//         request.get(`https://swapi.co/api/films/${num}`, (err, response, body)=> {
//             const film = JSON.parse(body);
//             response.statusCode === 200 
//                 ? resolve(film)
//                 : reject("Error en la peticion" + err)
//         });
//     });
// }

const getInfo = (num) => {
    let options = {
        uri: `https://swapi.co/api/people/${num}`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    const json = rp(options);
    return json;
}

let personaje = getInfo(1).then(data => {
    data.pelis=[];
    data.films.forEach(film => {
        let options = {
            method: 'GET',
            uri: film,
            body: {
                some: 'payload'
            },
            json: true // Automatically parses the JSON string in the response
        };
        rp(options).then(film => {
            data.pelis.push(film);
        });
    })
});
 
setTimeout(() => {
    console.log(personaje);
 }, 10000);
