
/*
class Point {
    constructor(length){
        this.size=length;
    }
}
*/
var circle;
var paper;

function mouseposition(event)
{
        var valueX= event.pageX;
        var valueY= event.pageY;
        shape_attr = {
            'transform': 't' + valueX  + ',' + valueY,
            }
        circle.animate(shape_attr,2000);  
}

setup = function() {
    paper =Raphael("container",2000,2000)
    circle = paper.circle(250, 150, 30).attr({ 
        fill: "#ACD", 
        stroke: "#000", 
        "stroke-width": 2
    });
    $(document).mousemove(mouseposition)
  }

$(document).ready(setup)