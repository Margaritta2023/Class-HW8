class Shiritory {

    constructor(){
        this.words = [];
        this.game_over = false;
    }

    play (str) {
        if(this.words.length === 0) {
            this.words.push(str);
            return this.words;
        }
       
       else if(str.at(0) === this.words.at(-1).at(-1) && !this.words.includes(str)) {
            this.words.push(str);
            return this.words;
        }

            else {
            this.game_over = true;
            return "Game Over";
        }
    }
    
    restart() {
        this.words = [];
        this.game_over = false;
        return "Game restarted";
    }

}

myShiritori = new Shiritory();
console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]
console.log(myShiritori.play("corn")); // "game over"

console.log(myShiritori.words); // ["apple", "ear", "rhino"]
// Words should be accessible.
console.log(myShiritori.restart()); // "Game restarted"     
console.log(myShiritori.words); // []
// Words array should be set back to empty.
console.log(myShiritori.play("hostess")); // ["hostess"]
console.log(myShiritori.play("stash")); // ["hostess", "stash"]
console.log(myShiritori.play("hostess")); // "game over"