var makeCheerleader = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img class="deadpool-4" src="img/deadpool_4.gif"></span>');
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};

makeCheerleader.prototype = Object.create(makeDancer.prototype);
makeCheerleader.prototype.constructor = makeCheerleader;

makeCheerleader.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.fadeIn().delay(1500).fadeOut();
  this.$node.show();
};