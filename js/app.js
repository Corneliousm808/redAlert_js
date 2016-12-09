console.log("sanity check")

function hello () {
  console.log("hello");
  var changeDiv = document.getElementById('divElement');
  changeDiv.innerHTML = "Wat";
  console.log(changeDiv);
}

function soFast() {
  console.log('Hello')
  var classElements = document.getElementsById('firtsPeriod');
  console.log(classElements);
  classElements[0].innerHTML = 'Wat'
}