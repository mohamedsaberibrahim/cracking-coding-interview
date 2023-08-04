/**
 * AnimalShelter
 *
 * 
 */

const Queue = require('./Queue');

class Animal {
    constructor(name) {
        this.name = name;
        this.order = 0;
    }

    getOrder() {
        return this.order;
    }

    setOrder(order) {
        this.order = order;
    }
    
    isOlderThan(animal) {
        return this.order < animal.getOrder();
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }    
}

class AnimalShelter {
    constructor() {
        this.catsQueue = new Queue();
        this.dogsQueue = new Queue();
        this.order = 0;
    }

    enqueue(animal) {
        animal.setOrder(this.order);
        this.order++;

        if (animal instanceof Cat) {
            this.catsQueue.enqueue(animal);
        }
        if (animal instanceof Dog) {
            this.dogsQueue.enqueue(animal);
        }
    }

    dequeueAny() {
        const oldestCat = this.catsQueue.front();
        const oldestDog = this.dogsQueue.front();

        if (oldestCat && oldestDog) {
            if (oldestCat.isOlderThan(oldestDog)) {
                return this.dequeueCat();
            }
            return this.dequeueDog()
        }
        if (oldestCat) {
            return this.dequeueCat();
        }
        if (oldestDog) {
            return this.dequeueDog();
        }
    }

    dequeueDog() {
        return this.dogsQueue.dequeue();
    }

    dequeueCat() {
        return this.catsQueue.dequeue();
    }
}

module.exports = {
    Cat,
    Dog,
    AnimalShelter
};