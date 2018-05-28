    const {createMovie, createProgram, loveFest} = require("./actions/controller")

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

    loveFest.addProgram(actionProgram);
    loveFest.addProgram(comedyProgram);

    console.log(loveFest.getData());
