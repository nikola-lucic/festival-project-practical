const Genre = require("../entities/Genre");
const Movie = require("../entities/Movie");
const Program = require("../entities/Program");
const Festival = require("../entities/Festival");

const createMovie = (movieTitle, movieLength, genreName) => {
    const genre = new Genre(genreName);
    const movie = new Movie(movieTitle, movieLength, genre);
    return movie;
}

const createProgram = (data) => {
    const date = new Date(data);
    const program = new Program(date)
    return program;
}

const loveFest = new Festival("LoveFest");

module.exports = {
    createMovie,
    createProgram,
    loveFest
}