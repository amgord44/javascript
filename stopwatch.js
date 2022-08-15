function Stopwatch() {
    let startTime, endTime, running, durration = 0;
  
    Stopwatch.prototype.start = function(){
      if (running)
      throw new Error('stopwas has already started.');
  
      running = true;
      startTime = new Date();
    };
    Stopwatch.prototype.stop = function() {
      if(!running)
      throw new Error(' Stopwatch is not started.');
  
      running = false;
  
      endTime = new Date();
  
      const seconds = (endTime.getTime() - startTime.getTime()) /1000;
    };
  
    Stopwatch.prototype.reset= function() {
      startTime = null;
      endTime = null;
      running = false;
      durration = 0;
    };
  
    Object.defineProperties(this, 'duration', {
      get: function(){ return duration;}
    })
  }