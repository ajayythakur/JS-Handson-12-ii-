function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert("This is the output of Qn1"+ '\n'+ "Click OK to see" );
alert(counter());
alert(counter());
alert(counter());
alert(counter());



var a = 12;
(function () {
  alert("Qn 6 Output" + '\n' + "Click OK to see");
  alert(a);
})
();


var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert("Qn 7 Output" + '\n' + "Click OK to see");
    alert(a);
  };
})();
x();