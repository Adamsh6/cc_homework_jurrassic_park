const Park = function(name, ticketPrice, dinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
  const index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
}

Park.prototype.mostPopularDinosaur = function(){
  let mostVisitors = 0;
  let mostPopularDinosaur = null;
  for(let dinosaur of this.dinosaurs){
    if(dinosaur.guestsAttractedPerDay > mostVisitors){
      mostVisitors = dinosaur.guestsAttractedPerDay;
      mostPopularDinosaur = dinosaur;
    }
  }
    return mostPopularDinosaur
}

Park.prototype.findBySpecies = function(species){
  let speciesArray = [];
  for(let dinosaur of this.dinosaurs){
    if(dinosaur.species === species){
      speciesArray.push(dinosaur);
    }
  }
  return speciesArray;
}

Park.prototype.removeBySpecies = function(species){
  removeArray = []
  for(i=0; i < this.dinosaurs.length; i++){
    let dinosaur = this.dinosaurs[i]
    if(dinosaur.species === species){
      removeArray.unshift(i);
    }
  }
  for(let index of removeArray){
    this.dinosaurs.splice(index, 1);
  }
}

Park.prototype.totalVisitorsPerDay = function(){
  let totalVisitors = 0
  for(let dinosaur of this.dinosaurs){
    totalVisitors += dinosaur.guestsAttractedPerDay;
  }
  return totalVisitors;
}

Park.prototype.totalVisitorsPerYear = function(){
  return this.totalVisitorsPerDay() * 365;
}

Park.prototype.yearlyRevenue = function(){
  return this.totalVisitorsPerYear() * this.ticketPrice
}

Park.prototype.dietTable = function(){
  dietTable = {'carnivore': 0, 'herbivore': 0};
    for(let dinosaur of this.dinosaurs){
      let key = dinosaur.diet;
      dietTable[key] += 1;
    }
  return dietTable;
}

module.exports = Park;
