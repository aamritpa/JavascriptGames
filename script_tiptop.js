make= function(){
    
    var category= $('#option').val()
    var totalnumber= $('#quantity').val()
    var shape = [];
    var count=0

//Creating a star
    Raphael.fn.star = function(a, b, r) 
    {
      // start at the top point
      var path = "M" + a + "," + (b-r);
      
      // let's draw this the way we might by hand, by connecting each point the one two-fifths of the way around the clock
      for (var c = 0; c < 6; c += 1)
      {
          var angle = 270 + c * 144,
              rx = a + r * Math.cos(angle * Math.PI / 180),
              ry = b + r * Math.sin(angle * Math.PI / 180);
          path +=  "L"+rx + "," + ry;
      }    
      return paper.path(path);
      }

    var i=0
    for (i=0;i<totalnumber;i++){
      x = Math.floor(Math.random() * 900)-400 ;
      y = Math.floor(Math.random() * 900)-400 ;  

      if(category=='a'){
        shape[i]=paper.rect(1200, 400, 1000/totalnumber, 1000/totalnumber)
      }


      if(category=='b'){
        shape[i]=paper.circle(1200, 400, 1000/totalnumber, 1000/totalnumber)
      }

      if(category=='c'){
        shape[i]=paper.star(1200, 400, 1000/totalnumber);
      }
        
    shape_attr = {
   'transform': 't' + x + ',' + y+ 'r'+(x+y),
   'fill': '#f'+Math.floor(Math.random() * 80),
    }

    callback= function () { 
      this.hide()
      document.getElementById("Misses").innerHTML = totalnumber-count;
    }
    zap= function(){
      this.hide()
      count=count+1
      document.getElementById("score").innerHTML = count;
    }
    shape[i].animate(shape_attr,10000, 'linear',callback);
    shape[i].click(zap)
    } 
    //default the score and misses to 0
    document.getElementById("Misses").innerHTML = 0;
    document.getElementById("score").innerHTML = 0;
}


setup = function() {
  paper = Raphael('container',2000,1000)
  $('button').click(make)
}
$(document).ready(setup)

