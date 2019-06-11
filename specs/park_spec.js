const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    tRex = new Dinosaur('t-rex', 'carnivore', 50);
    velociraptor = new Dinosaur('velociraptor', 'carnivore', 130);
    triceratops = new Dinosaur('triceratops', 'herbivore', 40)
    tRex2 = new Dinosaur('t-rex', 'carnivore', 60)
    dinoArray = [tRex, velociraptor]
    park = new Park('Triassic Retreat', 30, dinoArray)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Triassic Retreat');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 30);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, dinoArray);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(triceratops);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [tRex, velociraptor, triceratops]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(velociraptor);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [tRex]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, velociraptor);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(tRex2);
    const actual = park.findBySpecies('t-rex');
    assert.deepStrictEqual(actual, [tRex, tRex2]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(tRex2);
    park.removeBySpecies('t-rex');
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [velociraptor])
  });

});
