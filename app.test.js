import makeApp from './app.js';
import request from 'supertest';
import mockMovies from './movies.mock.js'


describe('sample', () => {
    test('1+1 = 2', () => {
        expect(1 + 1).toBe(2);
    })
})
describe('testing API', () => {
    let app;
    beforeEach(()=>{
        app = makeApp(mockMovies);

    })
 

    describe('test of ./', () => {
        test('it should response the GET method', async () => {
            const response = await request(app).get('/');
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('html')
        })
    })

    describe('test of /movies', () => {
        test('it should respond with an array of movies', async () => {
            const response = await request(app).get('/movies');
            expect(response.body).toEqual(mockMovies);
        })
    })

})