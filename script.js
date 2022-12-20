/*ageInDays= (currYear-birthYear)*365 */

function ageInDays() {
  var birthYear = prompt("what year were you born ... ?");
  var currYear = prompt("Please Enter Current Year");

  var ageInDayss=(currYear-birthYear)*365;
  /*console.log(ageInDayss);*/

  var h1=document.createElement('h1');
  var textAnswer=document.createTextNode('you are'+ageInDayss+'days old');
  h1.setAttribute('id','ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}
