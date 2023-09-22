class Jungle {
    constructor (){
        this.animals = []
    }
    addAnimal(animal) {
        this.animals.push(animal);
      }
    soundOff () {
        this.animals.forEach(item =>{ 
            item.sound();
            console.log(`${item.constructor.name} energy is : ${item.energy}`)
        })
      }
}

class Animal {
    constructor (energy) {
        this.energy = energy
    }
    sound () {
        this.energy -= 3
    }
    eatingFood () {
        this.energy += 3
    }
    sleep() {
        this.energy += 10
    }
}

class Tiger extends Animal {
    sleep() {
        super.sleep();
        this.energy += 5;
    }

    eatingFood (food) {
        if (food instanceof Grain) {
            console.log("I can’t eat that");
          } else {
            super.eatingFood();
            this.energy += 5;
          }
       
    }
}
class Snake extends Animal{

}
class Monkey extends Animal{
    sound () {
        super.sound();
        this.energy -= 4
    }
    eatingFood () {
        super.eatingFood();
        this.energy += 2;
    }

    play () {
        if(this.energy < 8) console.log( "I’m too tired" );
        else {
            this.energy -= 8;
            console.log( "Oooo Oooo" );
        }
    }
}

class Food {}
class Fish extends Food {}

class Grain extends Food {}

class Meat extends Food {}

//

let jungleOfGeorge = new Jungle();
let monkey = new Monkey(22);
let tiger = new Tiger(20);
let snake = new Snake(8);
let meat = new Meat();
let grain = new Grain();
let fish = new Fish();

jungleOfGeorge.addAnimal(monkey);
jungleOfGeorge.addAnimal(tiger);
jungleOfGeorge.addAnimal(snake);
jungleOfGeorge.addAnimal(monkey);
console.log(jungleOfGeorge)

jungleOfGeorge.soundOff();

monkey.play();
monkey.eatingFood(fish);
console.log(jungleOfGeorge)
monkey.play();
monkey.eatingFood(fish);
monkey.eatingFood(fish);
monkey.sound();
console.log(jungleOfGeorge, "Monkey part over")


tiger.eatingFood(meat);
console.log(jungleOfGeorge)
tiger.sleep();
console.log(jungleOfGeorge, "Before Grain")
tiger.eatingFood(grain, "After Grain");
console.log(jungleOfGeorge)

