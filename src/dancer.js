// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.scatter = function() {
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};

makeDancer.prototype.lineUpTop = function(i) {
  // this.$node.animate({
  //   top: $('body').height() * 0.1
  // });
  this.setPosition($('body').height()*0.1, i * 50 + 100)
};

makeDancer.prototype.lineUpBottom = function(i) {
  // this.$node.animate({
  //   top: $('body').height() * 0.9
  // });
  this.setPosition($('body').height()*0.8, i * 50 + 100)
};

makeDancer.prototype.lineUpLeft = function(i) {
  // this.$node.animate({
  //   left: $('body').width() * 0.2
  // });
  this.setPosition(i * 50 + 100, $('body').width()*0.15)
};

makeDancer.prototype.lineUpRight = function(i) {
  // this.$node.animate({
  //   left: $('body').width() * 0.8
  // });
  this.setPosition(i * 50 + 100, $('body').width()*0.85)
};

makeDancer.prototype.danceOff = function(top, left, i) {
  this.setPosition(top, left);
  this.$node.animate({top: 100}, 5000)
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
