(() => {

    console.log("HI");

    class Genre {
        constructor(genreName) {
            this.genreName = genreName;
        }

        getFullName() {
            return `${this.genreName.charAt(0).toUpperCase()}${this.genreName.charAt(this.genreName.length - 1).toUpperCase()}`;
        }
    }

    class Movie extends Genre {
        constructor(title, length, genreName) {
            super(genreName);
            this.title = title.charAt(0).toUpperCase() + title.slice(1);
            this.length = length;
        }

        getData() {
            let genre = this.getFullName()
            return `${this.title}, ${this.length} min. ${genre}`;
        }
    }

    class Program {
        constructor(date) {
            this.date = new Date(date);
            this.listOfMovies = [];
        }

        addMovie(movie) {
            this.listOfMovies.push(movie)
        }

        getData() {
            const date = this.date;
            const movieList = this.listOfMovies;
            let programDuration = 0;

            this.listOfMovies.forEach((movie) => {
                programDuration += movie.length;
            });

            let beginningOfProgram = `${date.getDate()}.${(date.getMonth() + 1)}.${date.getFullYear()}`;
            let output = `${beginningOfProgram}\n` + `Program duration ${programDuration} min \n`;

            movieList.forEach((movie) => {
                output += "\t\t" + `${movie.getData()}` + "\n";
            });

            return output;
        }
    }

    class Festival {
        constructor(name) {
            this.name = name.charAt(0).toUpperCase() + name.slice(1);
            this.listOfPrograms = [];
        }

        addProgram(program) {
            this.listOfPrograms.push(program);
        }

        getData() {
            const festivalName = this.name;
            const programs = this.listOfPrograms;
            let totalMovies = 0;

            programs.forEach((program) => {
                totalMovies += program.listOfMovies.length;
            });

            let output = `${festivalName} has ${totalMovies} movie titles \n`;

            this.listOfPrograms.forEach((program) => {
                output += program.getData();
            });

            return output;
        }
    }

    const createMovie = (movieTitle, movieLength, genreName) => {
        const movie = new Movie(movieTitle, movieLength, genreName);
        return movie;
    }

    const createProgram = (data) => {
        const date = new Date(data);
        const program = new Program(date)
        return program;
    }

    const spiderman = createMovie("Spider-Man: Homecoming", 133, "Action");
    const planetApes = createMovie("War for the Planet of the Apes", 140, "Drama");
    const darkTower = createMovie("The Dark Towe", 95, "Western");
    const deadpool = createMovie("Deadpool", 108, "Comedy");

    const actionProgram = createProgram("Oct 28 2017");
    const comedyProgram = createProgram("Oct 29 2017");

    actionProgram.addMovie(spiderman);
    actionProgram.addMovie(planetApes);
    actionProgram.addMovie(darkTower);

    comedyProgram.addMovie(deadpool);

    const loveFest = new Festival("LoveFest");

    loveFest.addProgram(actionProgram);
    loveFest.addProgram(comedyProgram);

    console.log(loveFest.getData());

})();