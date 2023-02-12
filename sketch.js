var marks = [60,56,80,40,87];
function avg (){
  var sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
  var avrage = sum/marks.length;
  console.log (avrage);
}
function setup() 
{
  createCanvas(800,800);
  avg();
}

function draw() 
{
background(rgb(160,32,240));

}

