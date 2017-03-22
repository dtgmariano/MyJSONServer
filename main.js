/*function datahandler()
{
  console.log('new object');
  this.data = [];
  this.lj = preload;
}

function preload()
{
  console.log('preload');
  url = 'http://127.0.0.1/data.json';

}

var dh = new datahandler();
dh.lj();

console.log('end');
*/

url1 = 'http://127.0.0.1/data.json';
url2 = 'https://learnwebcode.github.io/json-example/animals-1.json';

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', url2);
ourRequest.onload = function()
{
  var ourData = JSON.parse(ourRequest.responseText);
  console.log('here', ourData);
}
ourRequest.send();
