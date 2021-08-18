// require('dotenv').config();
// const { API_KEY } = process.env;
// const { Router } = require('express');
// const router = Router();
// const axios = require('axios').default;
// const { Videogame, Genre } = require('../db');
// const genres = require('../routes/genres.js')


 
//    router.get('/', async (req, res) => {
//     let videogamesDb = await Videogame.findAll({
//         include: Genre
//     });
//     //Parseamos el objeto recibido de findAll porque es una referencia circular (?)
//     videogamesDb = JSON.stringify(videogamesDb);
//     videogamesDb = JSON.parse(videogamesDb);
//     //Aca dejamos el arreglo de generos plano con solo los nombres de cada genero
//     videogamesDb = videogamesDb.reduce((acc, el) => acc.concat({
//         ...el,
//         genres: el.genres.map(g => g.name)
//     }), [])

//     if (req.query.name) {
//         try {
//             let name = req.query.name;
//             let response = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
//             if (!response.data.count) return res.status(404).send(`No se encontro ningun videojuego con el nombre "${req.query.name}"`);
//             response.data.results = response.data.results.reduce((acc, el) => acc.concat({
//                 ...el,
//                 genres: el.genres.map(g => g.name)
//             }), [])
//             const filteredGamesDb = videogamesDb.filter(g => g.name.toLowerCase().includes(req.query.name.toLowerCase()));
//             const results = [...filteredGamesDb, ...response.data.results.splice(0, 15)];
//             return res.json(results)
//         } catch (err) {
//             return console.log(err)
//         }
//     } else {
//         try {
//             let pages = 0;
//             let results = [...videogamesDb];
//             let response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
//             while (pages < 4) {
//                 pages++;
//                 response.data.results = response.data.results.reduce((acc, el) => acc.concat({
//                     ...el,
//                     genres: el.genres.map(g => g.name),
                   
//                 }), [])
//                 results = [...results, ...response.data.results]
//                 response = await axios.get(response.data.next)
//             }
//             return res.json(results)
//         } catch (err) {
//             console.log(err)
//             return res.sendStatus(500)
//         }
//     }
// })






// module.exports = router;