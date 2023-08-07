/**
 * AnimalShelter
 *
 * 
 */

import { AnimalShelter, Dog, Cat } from './AnimalShelter';

describe('AnimalShelter test cases', () => {
  test('Calling dequeueDog should return first dog', () => {
    const animalShelter = new AnimalShelter();
    const dog1 = new Dog('Dog1');
    const dog2 = new Dog('Dog2');
    animalShelter.enqueue(dog1);
    animalShelter.enqueue(dog2);
    const selectedAnimal = animalShelter.dequeueDog();
    expect(selectedAnimal).toBe(dog1);
  });

  test('Calling dequeueAny should return first dog', () => {
    const animalShelter = new AnimalShelter();
    const dog1 = new Dog('Dog1');
    const dog2 = new Dog('Dog2');
    animalShelter.enqueue(dog1);
    animalShelter.enqueue(dog2);
    const selectedAnimal = animalShelter.dequeueDog();
    expect(selectedAnimal).toBe(dog1);
  });

  test('Calling dequeueCat should return first cat', () => {
    const animalShelter = new AnimalShelter();
    const cat1 = new Cat('Cat1');
    const cat2 = new Cat('Cat2');
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(cat2);
    const selectedAnimal = animalShelter.dequeueCat();
    expect(selectedAnimal).toBe(cat1);
  });

  test('Calling dequeueAny should return first cat', () => {
    const animalShelter = new AnimalShelter();
    const cat1 = new Cat('Cat1');
    const cat2 = new Cat('Cat2');
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(cat2);
    const selectedAnimal = animalShelter.dequeueAny();
    expect(selectedAnimal).toBe(cat1);
  });

  test('Calling dequeueAny should return first cat or dog', () => {
    const animalShelter = new AnimalShelter();
    const dog1 = new Dog('Dog1');
    const dog2 = new Dog('Dog2');
    const cat1 = new Cat('Cat1');
    const cat2 = new Cat('Cat2');
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog1);

    animalShelter.enqueue(cat2);
    animalShelter.enqueue(dog2);
    const selectedAnimal1 = animalShelter.dequeueAny();
    expect(selectedAnimal1).toBe(cat1);
    const selectedAnimal2 = animalShelter.dequeueAny();
    expect(selectedAnimal2).toBe(dog1);
  });
});