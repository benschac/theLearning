// Promise of data to come.
window.onload = function() {
  init();
  somethingElse();
}

function init() {
    var myPromise = new Promise(function(res, rej) {
      setTimeout(function() {
        res("Background changed");
      }, 1000);
    });


    myPromise.then(function(result) {
      console.log(result);
      document.body.style.backgroundColor = "black";
    })
    .catch(function(reason) {
      console.log(reason);
    })
}

function somethingElse() {
  console.log('something else');
}
