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
module.exports  = Program;