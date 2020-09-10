var circle; // Single player Circle
var paper;  // Paper Raphael
let point_array=[];  // Array to store all points.

let pointMap= new Map();
var count=0;    // Count total number of points.
var firstposition =true;
var startpointX;
var startpointY;

function pointgenerate(event)
{
    if(count<500){
        var x=Math.floor(Math.random()*5000);
        var y= Math.floor(Math.random()*5000);
        pointMap.set(x,y);
        
        var c= paper.circle(x,y, 10).attr({ 
        fill: '#f'+Math.floor(Math.random() * 100),
        stroke: "#RGB", 
        "stroke-width": 1
    });
    c.node.onmouseover= function(){
        
        count=count-1;
        c.remove();
        radius=radius+20;
        circle.hide();
        circle=paper.circle(250,150,radius);
        
    }
    count=count+1;
    }
}

function objectmovement(event){

    var valueX=event.clientX-250;
    var valueY=event.clientY-150;
    var i=0;


    shape_attr = {
        'transform': 't' + valueX  + ',' + valueY,
        }
    circle.animate(shape_attr);
    
}
var radius=50;   
setup = function() {
    paper =Raphael("container",5000,5000)
    circle = paper.circle(250, 150, radius).attr({ 
        fill: "#ACD", 
        stroke: "#000", 
        "stroke-width": 2
    });
    $(document).mousemove(pointgenerate)
    $(document).mousemove(objectmovement)
}

$(document).ready(setup)