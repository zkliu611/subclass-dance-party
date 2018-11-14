var makeFallingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="subDancer"><img class="deadpool-2" src="img/deadpool_2.gif"></span>');
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};

makeFallingDancer.prototype = Object.create(makeDancer.prototype);
makeFallingDancer.prototype.constructor = makeFallingDancer;

makeFallingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  
  // function removePool() {
  //   setTimeout(function() {
  //   $('.subDancer').remove();
  // }, 4000);
  // }
  
  this.$node.animate({ top: 1300 }, 5000).hide(3000);
  
};