const Person = require("./Person.js");

class Kyle extends Person {
    constructor(name, favoriteColor, hobby){
        super(name, favoriteColor);
        this.hobby = hobby;
    }
}
module.exports = Kyle;