var circle; // Single player Circle
var paper;  // Paper Raphael
var point_array= [];  // Array to store all points.
var count=0;    // Count total number of points.
var firstposition =true;

function pointgenerate(event)
{
    point_array[count] = paper.circle(Math.random()*2500, Math.random()*2000, 5).attr({ 
        fill: "#ACD", 
        stroke: "#000", 
        "stroke-width": 1
    });
    count=count+1;
}
var firstX=0;
var firstY=0;
var valueX=0;
var valueY=0;
function objectmovement(event)
{
    if(firstposition==true)
    {
        firstX=event.clientX-250;
        firstY=event.clientY-150;
        firstposition=false;
    }
    else{
        valueX= event.clientX-250;
        valueY= event.clientY-150;
        firstposition=true;
    }
    shape_attr = {
            'transform': 't' + valueX  + ',' + valueY,
            }
        circle.animate(shape_attr,1000);  
        var coords = "X coords: " + valueX + ", Y coords: " + valueY;
        document.getElementById("demo").innerHTML = coords;
       
        if(valueX-firstX>20 )
        {
            window.scrollBy(10, 0);
        }
        else if(valueX-firstX<-50)
        {
            window.scrollBy(-20, 0);
        }
        
        if(valueY-firstY>20 )
        {
            window.scrollBy(0, 10);
        }
        else if(valueY-firstY<-50)
        {
            window.scrollBy(0, -10);
        }
        
        
}
        

setup = function() {
    paper =Raphael("container",5000,5000)
    circle = paper.circle(250, 150, 30).attr({ 
        fill: "#ACD", 
        stroke: "#000", 
        "stroke-width": 2
    });
    $(document).mousemove(objectmovement)
    $(document).mousemove(pointgenerate)
  }

$(document).ready(setup)