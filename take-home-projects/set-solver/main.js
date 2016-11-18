'use strict';

var cardSet1 = [{
  // This is a set.
  color: "blue",
  number: "2",
  pattern: "striped",
  shape: "waves"
},
{
  color: "green",
  number: "1",
  pattern: "filled",
  shape: "pill"
},
{
  color: "red",
  number: "3",
  pattern: "open",
  shape: "diamond"
}];

var cardSet2 = [{
  // This is a set.
  color: "blue",
  number: "2",
  pattern: "striped",
  shape: "waves"
},
{
  color: "blue",
  number: "1",
  pattern: "filled",
  shape: "pill"
},
{
  color: "red",
  number: "2",
  pattern: "open",
  shape: "diamond"
}];

var cardSet3 = [{
  // This is a set.
  color: "blue",
  number: "2",
  pattern: "striped",
  shape: "waves"
},
{
  color: "green",
  number: "1",
  pattern: "filled",
  shape: "waves"
},
{
  color: "red",
  number: "3",
  pattern: "striped",
  shape: "diamond"
}];

function isSet(cardstoCheck) {
  var tmp = [];
  for(var i = 0; i < cardstoCheck.length; i++) {

    for(var item in cardstoCheck[i]) {

      if (tmp.indexOf(cardstoCheck[i][item]) === -1) {
        tmp.push(cardstoCheck[i][item]);

      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(isSet(cardSet1));


$(document).ready(function() {

  $('.card').each(function( index ) {
    $('.color').html(cardSet1.color);
  });

});
