
class Movie {
    constructor(title, length, genre) {
        this.title = title.charAt(0).toUpperCase() + title.slice(1);
        this.length = length;
    }

    getData() {
        return `${this.title}, ${this.length} min. ${this.genre}`;
    }
}

module.exports = Movie;