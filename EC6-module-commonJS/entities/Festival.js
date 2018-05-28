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
module.exports = Festival;