$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
<<<<<<< HEAD
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log(dancerMakerFunctionName); // makeBlinkyDancer 'string'
    console.log(window[dancerMakerFunctionName]);
=======
     
     var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName); // makeBlinkyDancer 'string'
    // console.log(window[dancerMakerFunctionName]);
>>>>>>> 12a597c387b606acdf9121983c208be000c39416
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    
    console.log(dancerMakerFunctionName);
    console.log(dancerMakerFunction);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
    $('body').height() * Math.random(),
    $('body').width() * Math.random(),
    Math.random() * 2500
    );
<<<<<<< HEAD
    console.log(dancer);
=======


    if (dancerMakerFunctionName !== 'makeFallingDancer') {
      window.dancers.push(dancer);
    }
    
>>>>>>> 12a597c387b606acdf9121983c208be000c39416
    $('body').append(dancer.$node);

    
  });

  $('.lineUpTop').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUpTop(i);
    }
  });

  $('.lineUpBottom').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUpBottom(i);
    }
  });

  $('.lineUpLeft').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUpLeft(i);
    }
  });

  $('.lineUpRight').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUpRight(i);
    }
  });

  $('.scatter').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].scatter();
    }
  });

  $('.danceOff').on('click', function() {
    var leftArr = window.dancers.slice(0, window.dancers.length / 2);
    var rightArr = window.dancers.slice(window.dancers.length / 2, window.dancers.length);
    for (var i = 0; i < rightArr.length; i++) {
      rightArr[i].lineUpRight(i);
    }
    for (var i = 0; i < leftArr.length; i++) {
      leftArr[i].lineUpLeft(i);
    }

    setInterval(function() {
      let rightSide = rightArr.shift();
      let leftSide = leftArr.shift();
      rightSide.danceOff(700,$('body').width() * 0.48, i);
      leftSide.danceOff(700,$('body').width() * 0.42, i);
      rightArr.push(rightSide);
      leftArr.push(leftSide);
      setTimeout(function() {
        for (var i = 0; i < rightArr.length; i++) {
          rightArr[i].lineUpRight(i);
        }
        for (var i = 0; i < leftArr.length; i++) {
          leftArr[i].lineUpLeft(i);
        }
      }, 5000);
    }, 7000);

    
    // rightSide.danceOff(700,$('body').width() * 0.48, i);
    // leftSide.danceOff(700,$('body').width() * 0.42, i);

    
    
    // add more method for dance off

  });
  

  
});

