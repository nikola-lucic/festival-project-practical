"use strict";

(function() {

    console.log("HI");

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function() {
        return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase();
    }

    function Movie(title, length, genreName) {
        this.title = title.charAt(0).toUpperCase() + title.slice(1);
        this.length = length;
        Genre.call(this, genreName);
    }

    Movie.prototype = Object.create(Genre.prototype);
    Movie.prototype.constructor = Movie;

    Movie.prototype.getData = function() {
        var genre = Object.getPrototypeOf(Movie.prototype).getData.call(this);
        return this.title + ", " + this.length + " min" + ", " + genre;
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
    }

    Program.prototype.addMovie = function(movie) {
        this.listOfMovies.push(movie)
    }

    Program.prototype.getData = function() {
        var date = this.date;
        var movieList = this.listOfMovies;
        var programDuration = 0;

        this.listOfMovies.forEach(function(movie) {
            programDuration += movie.length;
        });

        var beginningOfProgram = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        var output = beginningOfProgram + "\n" + "Program duration " + programDuration + " min\n";

        movieList.forEach(function(movie) {
            output += "\t\t" + movie.getData() + "\n";
        });

        return output;
    }

    function Festival(name) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.listOfPrograms = [];
    }

    Festival.prototype.addProgram = function(program) {
        this.listOfPrograms.push(program);
    }

    Festival.prototype.getData = function() {
        var festivalName = this.name;
        var programs = this.listOfPrograms;
        var totalMovies = 0;

        programs.forEach(function(program) {
            totalMovies += program.listOfMovies.length;
        });

        var output = festivalName + " has " + totalMovies + " movie titles\n";

        this.listOfPrograms.forEach(function(program) {
            output += program.getData();
        });

        return output;
    }

    function createMovie(movieTitle, movieLength, genreName) {
        var movie = new Movie(movieTitle, movieLength, genreName);
        return movie;
    }

    function createProgram(data) {
        var date = new Date(data);
        var program = new Program(date)
        return program;
    }

    var spiderman = createMovie("Spider-Man: Homecoming", 133, "Action");
    var planetApes = createMovie("War for the Planet of the Apes", 140, "Drama");
    var darkTower = createMovie("The Dark Towe", 95, "Western");
    var deadpool = createMovie("Deadpool", 108, "Comedy");

    var actionProgram = createProgram("Oct 28 2017");
    var comedyProgram = createProgram("Oct 29 2017");

    actionProgram.addMovie(spiderman);
    actionProgram.addMovie(planetApes);
    actionProgram.addMovie(darkTower);

    comedyProgram.addMovie(deadpool);

    var loveFest = new Festival("LoveFest");

    loveFest.addProgram(actionProgram);
    loveFest.addProgram(comedyProgram);

    console.log(loveFest.getData());

})();