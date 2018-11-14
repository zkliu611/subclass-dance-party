describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('fallingDancer', function() {

  var fallingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fallingDancer = new makeFallingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fallingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should animate dancer', function() {
    sinon.spy(fallingDancer.$node, 'animate');
    fallingDancer.step();
    expect(fallingDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fallingDancer, 'step');
      expect(fallingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fallingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fallingDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('cheerleader', function() {

  var cheerleader, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cheerleader = new makeCheerleader(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(cheerleader.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node show', function() {
    sinon.spy(cheerleader.$node, 'show');
    cheerleader.step();
    expect(cheerleader.$node.show.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(cheerleader, 'step');
      expect(cheerleader.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(cheerleader.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(cheerleader.step.callCount).to.be.equal(2);
    });
  });
});

describe('cuteDancer', function() {

  var cuteDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cuteDancer = new makeCuteDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(cuteDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node show', function() {
    sinon.spy(cuteDancer.$node, 'show');
    cuteDancer.step();
    expect(cuteDancer.$node.show.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(cuteDancer, 'step');
      expect(cuteDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(cuteDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(cuteDancer.step.callCount).to.be.equal(2);
    });
  });
});
