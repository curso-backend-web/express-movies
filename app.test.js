import makeApp from './app.js';
import request from 'supertest';
import mockMovies from './movies.mock.js'
import {jest} from '@jest/globals';

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

    afterEach(()=>{
        jest.clearAllMocks();
    })

    describe('test of ./', () => {
        test('it should response the GET method', async () => {
            const response = await request(app).get('/');
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('html')
        })
    })

    describe('test of /movies', () => {
        test('it should respond with an array of movies whit GET method', async () => {
            const response = await request(app).get('/movies');
            expect(response.body).toEqual(mockMovies);
        })
        test('should respond with status code 201 when POST method', async ()=>{
            const response = await request(app)
                        .post('/movies')
                        .send({
                            "id": 6,
                            "title": "Curso Back-End Web"
                         })
                expect(response.statusCode).toBe(201);
        })
        test('should respond with status code 201 when POST method', async ()=>{
            const response = await request(app)
                        .post('/movies')
                        .send({
                            "id": 6,
                            "title": "Curso Back-End Web"
                         })
                expect(response.body.result).toBeDefined();
        })
    })
    describe('test of ./movies/2',()=>{
        test('should response with code 200 when PUT method', async ()=>{

            const response = await request(app)
            .put('/movies/2')
            .send({
                "id": 2,
                "otroCampo":"Nuevo Campo"
             })
            expect(response.statusCode).toBe(200);
        })
        test('should response with object having new key "otroCampo"', async ()=>{
            const response = await request(app)
                .put('/movies/2')
                .send({
                    "id": 2,
                    "otroCampo":"Nuevo Campo"
                })
            expect(response.body.otroCampo).toBeDefined();
        })
    })

})