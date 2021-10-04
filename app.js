import express, { request } from 'express';


export default (movies) => {
    const app = express();

    app.use(express.json());

    app.use(express.static('views'))
    app.get('/', (req, res) => {
        res.send('index.html');
    })
    app.get('/movies', (req, res) => {

        res.status(200).json(movies);

    })

    app.get('/movies/:id', (req, res) => {
        const id = req.params.id;

        const movie = movies.filter(element => element.id == id)[0];

        res.status(200).json(movie);
    })

    app.get('/movies/searchTitle', (req, res) => {
        if (req.query.params.title >= 0) {
            movies.filter(element => element.title == title);
        }
    })

    app.post('/movies', (req, res) => {
        const movie = req.body;
        movies.push(movie);
        
        res.status(201).json({result:"ok"})

    })

    app.put('/movies/:id',(req,res)=>{
        const id = req.params.id;
        
        const idArray = movies.findIndex(element => element.id==id);
        
        if(idArray < 0)
            res.status(400).json({result:'No existe ese elemento'});

        const newMovie = {...movies[idArray],...req.body}

        console.log(newMovie);
        movies.splice(idArray,1,newMovie);
        res.json(movies[idArray]);
        
    })
    return app;
}
