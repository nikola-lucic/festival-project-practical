"use strict";

(function() {

    console.log("HI");

    function Genre(name) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);

        this.getGenreDate = function() {
            var sliceGenreName = this.name.slice(0, 1) + this.name.slice(-1).toUpperCase();
            var newGenreName = sliceGenreName;
            return newGenreName;
        }
    }

    function Movie(title, genre, length) {
        this.title = title.charAt(0).toUpperCase() + title.slice(1);
        this.genre = genre.getGenreDate();
        this.length = length;

        this.getMovieDate = function() {
            var movieOutput = this.title + ", " + this.length + ", " + this.genre
            return movieOutput;
        }
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];

        this.movieDuration = function() {
            var programLength = 0;
            this.listOfMovies.forEach(function(movie) {
                programLength += movie.length;
            });
            return programLength;
        }

        this.addMovieToProgram = function(movie) {
            this.listOfMovies.push(movie)
            return this.listOfMovies;
        }

        this.getData = function() {
            var date = this.date;
            var movieList = this.listOfMovies;
            var programDuration = this.movieDuration();
            var beginningOfProgram = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

            var output = beginningOfProgram + "\n" + "program duration " + programDuration + " min\n";

            movieList.forEach(function(movie) {
                output += "\t\t" + movie.getMovieDate() + "\n";
            });

            return output;
        };

    }

    function Festival(festivalName) {
        this.festivalName = festivalName.charAt(0).toUpperCase() + festivalName.slice(1);
        this.listOfPrograms = [];

        this.addProgramToFestival = function(program) {
            this.listOfPrograms.push(program)
            return this.listOfPrograms;
        }

        this.movieNumberInProgram = function() {
            var programs = this.listOfPrograms;
            var totalMovies = 0;

            programs.forEach(function(program) {
                totalMovies += program.listOfMovies.length;
            });
            return totalMovies;
        }

        this.getData = function() {
            var festivalName = this.festivalName;
            var listOfPrograms = this.listOfPrograms;
            var totalMovies = this.movieNumberInProgram()

            var output = festivalName + festivalName + " has " + totalMovies + " movie titles\n"

            listOfPrograms.forEach(function(program) {
                output += program.getData();
            });
            return output
        }

    }

    function createMovie(movieTitle, movieLength, genreName) {
        var genre = new Genre(genreName);
        var movie = new Movie(movieTitle, genre, movieLength);
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

    actionProgram.addMovieToProgram(spiderman);
    actionProgram.addMovieToProgram(planetApes);
    actionProgram.addMovieToProgram(darkTower);

    comedyProgram.addMovieToProgram(deadpool);

    var loveFest = new Festival("LoveFest");

    loveFest.addProgramToFestival(actionProgram);
    loveFest.addProgramToFestival(comedyProgram);

    console.log(loveFest.getData());

})()