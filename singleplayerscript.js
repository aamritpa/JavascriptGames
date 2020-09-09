var circle; // Single player Circle
var paper;  // Paper Raphael
let point_array=[];  // Array to store all points.
var count=0;    // Count total number of points.
var firstposition =true;
var startpointX;
var startpointY;
function pointgenerate(event)
{
    if(count<50)
    {
    point_array.push(paper.circle(Math.random()*2500, Math.random()*2000, 10).attr({ 
        fill: '#f'+Math.floor(Math.random() * 100),
        stroke: "#000", 
        "stroke-width": 1
    }));
    count=count+1;
    }
    $(document).mousemove(objectmovement)
}

function objectmovement(event){

    var valueX=event.clientX-250;
    var valueY=event.clientY-150;
    var i=0;
    if(count==50)
    {
        for(i=0;i<50;i++)
        {
            
            var distance = Math.sqrt(Math.pow((valueX-point_array[i].attr('cx')),2)+Math.pow((valueY-point_array[i].attr('cy')),2));
            console.log(distance);
            if(distance<=40)
            {
                console.log(point_array[i].attr('cx'));
                console.log("hello");
                point_array[i].hide();
                circle.attr('r')=circle.attr('r')+20;
                break;
            }
        }
    }
   console.log("Value of count"+count);

    
    
callback =function(){

    }
    
    shape_attr = {
        'transform': 't' + valueX  + ',' + valueY,
        }
    circle.animate(shape_attr,'linear',callback);  
}
var radius=30;   
setup = function() {
    paper =Raphael("container",5000,5000)
    
    circle = paper.circle(250, 150, radius).attr({ 
        fill: "#ACD", 
        stroke: "#000", 
        "stroke-width": 2
    });
    $(document).mousemove(pointgenerate)
    
}

$(document).ready(setup)