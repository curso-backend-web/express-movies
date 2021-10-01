import makeApp from './app.js';
import movies from './movies.js';


const app = makeApp(movies);

const PORT = 3000;

app.listen(PORT, _=>console.log(`listening on ${PORT}`));

