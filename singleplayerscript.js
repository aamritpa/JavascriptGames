//Global Variables 
var circle; // Single player Circle
var paper;  // Paper Raphael
var count=0;    // Count total number of points.
var firstposition =true;
var startpointX;
var startpointY;
var scrollermove = false;
var score=0;

var countDownDate = 30;

//Reloading the Page
function restart()
{
    location.reload(true);
}

// Update the count down every 1 second
var x = setInterval(function() {
    countDownDate=countDownDate-1;
    document.getElementById("Time").innerHTML = "Time Left: "+countDownDate + "s ";
    
  // If the count down is over, write some text 
  if (countDownDate < 0) {
    clearInterval(x);
    document.getElementById("Time").innerHTML = "Time UP!";

    if(score>=50){
        alert("Winner! Your Score is: "+score);
        score=0;
        countDownDate=30;  
    }
    else{
        alert("Time Up! You Lose!");
        score=0;
        countDownDate=30;
        
    }
  }
}, 1000);

//Generating Randomly Points
function pointgenerate(event)
{
    if(count<500){
        var x=Math.floor(Math.random()*2000);
        var y= Math.floor(Math.random()*2000);
        var c= paper.circle(x,y, 5).attr({ 
        fill: '#f'+Math.floor(Math.random() * 100),
        stroke: "#RGB", 
        "stroke-width": 1
    });
    
    c.node.onmouseover= function(){
        
        count=count-1;
        c.remove();
        radius=radius+2;
        score=score+1;
        document.getElementById("score").innerHTML = "Score: "+score;
    }
    count=count+1;
    }
}
var move =false;
var down=false;
//Movement of circle
function objectmovement(event){
    move =true;
    var valueX=event.clientX-250;
    var valueY=event.clientY-150;

    shape_attr = {
        'transform': 't' + valueX  + ',' + valueY,
        }
    circle.animate(shape_attr,0);
    
}

//JQUery Function calling and setting game window size
var radius=20;   
setup = function() {
    paper =Raphael("container",2000,1000)
    circle = paper.circle(250, -20, radius).attr({ 
        fill: "#ACD", 
        stroke: "#000", 
        "stroke-width": 2
    });
    $(document).mousemove(pointgenerate)
    $(document).mousemove(objectmovement)
}

$(document).ready(setup)
