var makeFallingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="subDancer"><img class="deadpool-2" src="img/deadpool_2.gif"></span>');
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};

makeFallingDancer.prototype = Object.create(makeDancer.prototype);
makeFallingDancer.prototype.constructor = makeFallingDancer;

makeFallingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({ top: 5000 }, 8000).hide(3000);
  // this.$node.delay(3000);
  // this.$node.hide();
};