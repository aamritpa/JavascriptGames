class Point {
    constructor(length){
        this.size=length;
    }
}



setup = function() {
    paper = Raphael('container',2000,1000)
    $('button').click(make)
  }
  $(document).ready(setup)