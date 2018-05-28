class Genre {
    constructor(genreName) {
        this.genreName = genreName;
    }

    getFullName() {
        return `${this.genreName.charAt(0).toUpperCase()}${this.genreName.charAt(this.genreName.length - 1).toUpperCase()}`;
    }
}

module.exports = Genre;