// Let's make a Cat constructor!
var Cat = (function() {
  // ... your code here.
  var weightAll = {};

  var cat = function(name, weight) {
    if (!name || !weight) {
      throw new Error("error");
    }
    weightAll[name] = weight;

    this.name = name;

    Object.defineProperty(this, "weight", {
      set: function(value) {
        weightAll[name] = value;
      },
      get: function() {
        return weightAll[name];
      }
    });
  };
  cat.averageWeight = function() {
    return (
      Object.keys(weightAll).reduce((acc, item) => {
        return acc + weightAll[item];
      }, 0) / Object.keys(weightAll).length
    );
  };
  return cat;
})();

fluffy = new Cat("fluffy", 20);
garfield = new Cat("garfield", 25);
console.log(Cat.averageWeight());
