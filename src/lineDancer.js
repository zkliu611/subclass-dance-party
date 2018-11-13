var makeLineDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="lineDancer"></span>');
  this.setPosition(Math.random() * top, Math.random() * left);
};

makeLineDancer.prototype = Object.create(makeDancer.prototype);
makeLineDancer.prototype.constructor = makeLineDancer;

makeLineDancer.prototype.oldStep = makeDancer.prototype.step;

makeLineDancer.prototype.step = function() {
  this.oldStep();
  this.$node.animate({'left': Math.random() * 1600}).animate({'top': Math.random() * 700});
};
