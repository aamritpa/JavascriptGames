var circle; // Single player Circle
var paper;  // Paper Raphael
var point_array= [];  // Array to store all points.
var count=0;    // Count total number of points.
var firstposition =true;

function pointgenerate(event)
{
    point_array[count] = paper.circle(Math.random()*2500, Math.random()*2000, 5).attr({ 
        fill: '#f'+Math.floor(Math.random() * 500),
        stroke: "#000", 
        "stroke-width": 1
    });
    count=count+1;
}
var firstX=0;
var firstY=0;
var valueX=0;
var valueY=0;
function mousemovement(event)
{
    
    firstX=valueX;
    firstY=valueY;
        
    valueX= event.clientX-250;
    valueY= event.clientY-150;
        
    if((valueY-firstY!=0) ||(valueX-firstX!=0) )
    {
        objectmovement(1); // Mouse Move
    }
    else
    {
        objectmovement(0);  // Mouse does not move
    }
}
function objectmovement(status){
    if(status==0)
    {
        shape_attr = {
            'transform': 't' + (valueX+100)  + ',' + (valueY+100),
            }
        circle.animate(shape_attr,2000);
        $(document).mousemove(mousemovement); 
        console.log(valueX);
    }
    else{
        shape_attr = {
            'transform': 't' + (valueX)  + ',' + (valueY),
            }
        circle.animate(shape_attr,2000);
    }
    /*
    var objectmovementX=valueX;
    var objectmovementY=valueY;
    shape_attr = {
        'transform': 't' + (valueX+20)  + ',' + (valueY+20),
        }
    circle.animate(shape_attr);  
    /*
    var coords = "X coords: " + valueX + ", Y coords: " + valueY;
    document.getElementById("demo").innerHTML = coords;
  
    if(valueX-firstX>0)
    {
        window.scrollBy(2, 0);
    }
    
    if(valueY-firstY>0 )
    {
        window.scrollBy(0, 2);
    }
     */
}
        
setup = function() {
    paper =Raphael("container",5000,5000)
    circle = paper.circle(250, 150, 30).attr({ 
        fill: "#ACD", 
        stroke: "#000", 
        "stroke-width": 2
    });
    $(document).mousemove(mousemovement)

    $(document).mousemove(pointgenerate)
  }

$(document).ready(setup)